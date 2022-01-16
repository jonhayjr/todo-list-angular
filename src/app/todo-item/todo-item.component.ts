import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: any;
  @Output() TodoChangeEvent = new EventEmitter();
  @Output() TodoDeleteEvent = new EventEmitter();

  model: any = {}

  constructor() { }

  ngOnInit(): void {
    this.model = this.item;
  }

  getTodoDivClass(){
    if (this.item.completed) {
      return 'p-5 border border-4 font-sans border-green-500';
    } else {
      return 'p-5 border border-4 font-sans border-red-500';
    }
  }

  toggleCompleted() {
    this.item.completed = !this.item.completed;
    this.TodoChangeEvent.emit(this.item)
  }

  handleSubmit() {
    if (this.model.todo) {
      this.TodoChangeEvent.emit(this.item)
    }
  }

  handleDelete() {
    this.TodoDeleteEvent.emit(this.item)
  }

}
