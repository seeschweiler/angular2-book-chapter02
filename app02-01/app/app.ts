import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  template: `
      <h4>Todos List</h4>
      <h5>Number of Todos: <span class="badge">{{todos.length}}</span></h5>
      <ul class="list-group">
        <li *ngFor="#todo of todos" class="list-group-item">
          {{todo}}
        </li>
      </ul>
      <div class="form-inline">
        <input class="form-control" #todotext>
        <button class="btn btn-default" (click)="addTodo(todotext.value)">Add Todo</button>
      </div>
    `
})
export class App {
  todos: Array<string>;
  constructor() {
    this.todos = ["Todo 1", "Todo 2", "Todo 3"];
  }
  addTodo(todo: string) {
    this.todos.push(todo);
  }
}