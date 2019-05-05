import { Injectable } from "@angular/core";

import { ToDosModel } from "../../models/todos.model";
import { todosList } from "../../models/todos.mock";
import * as _ from 'lodash';

import { ValidateService } from "../validate/validate.service";


@Injectable({
	providedIn: "root"
})

export class todoService {
	constructor(private validate: ValidateService) {

	}

	getTodo(id: Number): ToDosModel {
		if (!this.validate.isValid()) {
			return;
		}
		let _todo = _.filter(todosList, (td) => {
			return id == td.id;
		})

		return _todo.length && _todo[0];
	}
}