import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  showadd!:boolean
  showupdate!:boolean

  formValue!: FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id:[],
      name:[],
      cost:[]
    })
  }

  add(){
    this.showadd = true
    this.showupdate = false
  }

  update(){
    this.showadd = false
    this.showupdate = true
  }
}
