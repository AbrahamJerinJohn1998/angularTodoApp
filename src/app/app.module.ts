import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
const myRoute:Routes=[
  {
    path:"",
    component:AddTodoComponent
  },
  {
    path:"/viewtodo",
    component:ViewTodoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewTodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
