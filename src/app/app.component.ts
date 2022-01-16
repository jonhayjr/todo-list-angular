import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Todo List App';
  todos:any = [];

  addTodoItem(item:any) {
    const newTodo = {todo: item.todo, completed: false};
    this.todos.push(newTodo);
  }

  updateTodo(item) {
    let todoItem = this.todos.find(curItem => curItem.todo === item.todo)
    todoItem = item;
  }

  deleteTodo(item) {
    let newTodos = this.todos.filter(curItem => curItem.todo !== item.todo);
    this.todos = newTodos;
  }
}
