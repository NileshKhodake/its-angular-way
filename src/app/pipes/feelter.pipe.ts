import { Pipe, PipeTransform } from "@angular/core";

import { ToDosModel } from "../models/todos.model";
import { todosList } from "../models/todos.mock";

@Pipe({
	name: "feelter"
})

export class FeelterPipe implements PipeTransform {
	transform(items: any, inputStr: string) {
		let results = todosList.filter(function(td) {
			return td.header.toLowerCase().indexOf(inputStr.toLowerCase()) !== -1;
		})

		return results;
	}
}