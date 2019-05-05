import { Component, SimpleChanges } from "@angular/core";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
	selector: "to-do-content",
	templateUrl: "./todo.content.component.html",
	styleUrls: ["./todo.content.component.css"]
})

export class TodoContentComponent {
	@Input() todo: any;
	@Output() clickNoted = new EventEmitter<any>();

	count : Number = 0;

	onClick() {
		this.count = +this.count + 1;
		this.clickNoted.emit(this.count);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log("Changes", changes);
	}
}