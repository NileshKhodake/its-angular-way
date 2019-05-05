import { Component, ViewChild, ElementRef } from "@angular/core";
import { ToDosModel } from "../models/todos.model";
import { todosList } from "../models/todos.mock";

@Component({
	selector: "todos",
	templateUrl: "./todos.component.html",
	styleUrls: ["./todos.component.css"]
})

export class ToDosComponent {
	
	ToDoCount : Number = 0;
	ToDoList: ToDosModel[] = todosList;
	@ViewChild("header") header : ElementRef;

	constructor() {
		console.log("ToDo: Constructor");
	}

	ngOnChanges() {
		console.log("ToDo: ngOnChanges");
	}

	ngOnInit() {
		console.log("ToDo: ngOnInit");
		let h = this.header;
	}

	ngDoCheck() {
		console.log("ToDo: ngDoCheck");
	}

	ngAfterContentInit() {
		console.log("ToDo: ngAfterContentInit");
	}

	ngAfterContentChecked() {
		console.log("ToDo: ngAfterContentChecked");
	}

	ngAfterViewInit() {
		console.log("ToDo: ngAfterViewInit");
		let h = this.header;
	}

	ngAfterViewChecked() {
		console.log("ToDo: ngAfterViewChecked");
	}

	ngOnDestroy() {
		console.log("ToDo: ngOnDestroy");
	}

	updateCounter() : any {
		setTimeout(() => {
			this.ToDoCount = +this.ToDoCount + 1;
		}, 5000);
	}
}