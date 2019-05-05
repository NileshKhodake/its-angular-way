import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ToDosComponent } from "./todos/todos.component";
import { ToDoComponent } from "./todo/todo.component";

import { AuthGuardService } from "./shared/auth-guard.service"

const routes : Routes = [
	{ path: "", redirectTo: "/todos", pathMatch: 'full' },
	{ path: "todos", component: ToDosComponent },
	{ path: "todo/:id", component: ToDoComponent, canActivate:[AuthGuardService] },
	{ path: "about", loadChildren: "./about/about.module#AboutModule" },
	{ path: "**", redirectTo: "/todos"}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {

}
