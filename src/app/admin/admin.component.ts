import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setLoginStatus } from 'loginStatus/LS';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  [x: string]: any;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getPosts() {
    
    alert('LOGGED IN') 
                var sp:any
                sp.textContent = 'Hi, Admin'
                setLoginStatus(true)
                this.router.navigate(['/adminhome']);
    }
}
