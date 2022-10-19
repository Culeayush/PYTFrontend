import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
 
  getPosts(){
	console.log("BUTTON CLICKED")
	this.posts = this.http.get<any>(this.ROOT_URL+'/user/get')
	.subscribe(data => console.log(data))

	// console.log(this.posts)
  }
}
