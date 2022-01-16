import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() todo = new EventEmitter();

  model:any = {}

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(formVal:any) { 
    if (formVal) {
      this.todo.emit(formVal);
      this.model = {};
    }
  }

}
