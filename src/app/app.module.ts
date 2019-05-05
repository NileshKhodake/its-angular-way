import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToDosComponent } from './todos/todos.component';
import { ToDoComponent } from './todo/todo.component';
import { TodoContentComponent } from "./todo_content/todo.content.component";

import { todoService} from "./shared/todo/todo.service";
import { ValidateService } from "./shared/validate/validate.service";
import { AuthGuardService } from "./shared/auth-guard.service";

import { highlightDirective } from "./directives/highlight.directive";
import { UnlessDirective } from "./directives/unless.directive";

import { FeelterPipe } from "./pipes/feelter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoComponent,
    TodoContentComponent,
    highlightDirective,
    UnlessDirective,
    FeelterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    todoService,
    ValidateService,
    AuthGuardService
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
