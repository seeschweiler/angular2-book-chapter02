/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var MyApp = (function () {
    function MyApp() {
        this.todos = ["Todo 1", "Todo 2", "Todo 3"];
    }
    MyApp.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    MyApp = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n    <h4>Todos List</h4>\n    <h5>Number of Todos: <span class=\"badge\">{{todos.length}}</span></h5>\n    <ul class=\"list-group\">\n      <li *ng-for=\"#todo of todos\" class=\"list-group-item\">\n        {{todo}}\n      </li>\n    </ul>\n    <div class=\"form-inline\">\n      <input class=\"form-control\" #todotext>\n      <button class=\"btn btn-default\" (click)=\"addTodo(todotext.value)\">Add Todo</button>\n    </div>\n    ",
            directives: [angular2_1.NgFor]
        })
    ], MyApp);
    return MyApp;
})();
angular2_1.bootstrap(MyApp);
