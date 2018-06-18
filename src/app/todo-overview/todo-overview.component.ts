import { Component, OnInit } from '@angular/core';
import {NgRedux,select} from '@angular-redux/store';
import {IAppstate} from '../store';
import {REMOVE_ALL_TODOS}from '../action';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  @select () todos;
  @select() lastUpdate;


  constructor(private ngRedux:NgRedux<IAppstate>) { }

  ngOnInit() {
  }

  //the clearTodos methodis implemented to dipspatch the REMOVE_ALL_TODOS action type to the store
  //dispatching is done by using the dispatch method of ngRedux service
clearTodos(){
  this.ngRedux.dispatch({type:REMOVE_ALL_TODOS});
}
}
