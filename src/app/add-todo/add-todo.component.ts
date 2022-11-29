import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
userId=""
id=""
title=""
completedStatus=""

  readValues=()=>
  {
  
  let data:any={"userId":this.userId,"id":this.id,"title":this.title,"completedStatus":this.completedStatus}
  console.log(data)
  }
}
