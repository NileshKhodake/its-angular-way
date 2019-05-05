import { Directive, ElementRef, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
	selector: '[hilight]'
})

export class highlightDirective {

	@Input('hilight') hilightColor: string;

	constructor(private elRef : ElementRef) {
		
	}

	@HostBinding("style.boxShadow") boxShadow : string;

	@HostListener("mouseenter") onMouseEnter() {
		this.highlight("4px 4px black")
	}

	@HostListener("mouseleave") onMouseLeave() {
		this.highlight("")
	}

	private highlight(boxShadowProp: string) {
		this.boxShadow = boxShadowProp;
	}
}
