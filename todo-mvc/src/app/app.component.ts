import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-mvc';

  hasTodo$: Observable<boolean>;

  constructor(
    private todoService: TodoService
  ){}

  ngOnInit(){

  }
}
