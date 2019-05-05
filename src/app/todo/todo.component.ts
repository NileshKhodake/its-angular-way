import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as _ from 'lodash';

import { ToDosModel } from "../models/todos.model";
import { todosList } from "../models/todos.mock";

import {todoService } from "../shared/todo/todo.service";

@Component({
	selector: "todo",
	templateUrl: "./todo.component.html",
	styleUrls: ["./todo.component.css"]
})

export class ToDoComponent {
	id: Number;
	toDo: ToDosModel;
	count: any;

	constructor(private route: ActivatedRoute, private todoService: todoService) {

	}

	ngOnInit() {
		this.id = this.route.snapshot.params.id;
		this.toDo = this.todoService.getTodo(this.id);
	}

	onUpdate($event) {
		this.count = $event;
	}
}
