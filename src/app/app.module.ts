import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {NgRedux,NgReduxModule} from '@angular-redux/store';
import {IAppstate,rootReducer,INITIAL_STATE} from './store';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  //activation the store
  constructor (ngRedux:NgRedux<IAppstate>){
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
 }
