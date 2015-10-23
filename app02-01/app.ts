/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <h4>Todos List</h4>
    <h5>Number of Todos: <span class="badge">{{todos.length}}</span></h5>
    <ul class="list-group">
      <li *ng-for="#todo of todos" class="list-group-item">
        {{todo}}
      </li>
    </ul>
    <div class="form-inline">
      <input class="form-control" #todotext>
      <button class="btn btn-default" (click)="addTodo(todotext.value)">Add Todo</button>
    </div>
    `,
    directives: [NgFor]
})
class MyApp {
  todos: Array<string>;
  constructor() {
    this.todos = ["Todo 1", "Todo 2", "Todo 3"];
  }
  addTodo(todo: string) {
    this.todos.push(todo);
  }
}

bootstrap(MyApp);