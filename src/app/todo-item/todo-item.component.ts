import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {TodoItem}from '../interface/todo-item';
@Component({
  selector: 'David-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  constructor() { }

  ngOnInit(): void {
  }

}

