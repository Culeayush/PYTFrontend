import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  readonly ROOT_URL = 'http://localhost:8093';

  posts :any ;
  constructor(private http:HttpClient){

  }
 
  getUser(){
    this.posts = this.http.get(this.ROOT_URL+'/user/get')
  }
}
