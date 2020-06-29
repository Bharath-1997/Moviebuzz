import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig, MatButton} from "@angular/material";
import { MovieinfoComponent } from '../movieinfo/movieinfo.component';
import { MovieplayComponent } from '../movieplay/movieplay.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private dialog:MatDialog,private auth:UserService,private router:Router,private afauth:AngularFireAuth) { }
  email:string;
  email1:string;
  password:string;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  ngOnInit() {
    if(this.auth.isloggedin())
    {
      this.navigate();      
    }
  }
 navigate()
 {
  this.router.navigate(['list']);
 }
  login()
  {
    //console.log(this.email+" "+this.password);
    this.auth.login(this.email,this.password);
  }
  check()
  {
    if(this.email.includes("@")&&this.email.includes(".com"))
    {
    return false;
    }
    return true;
  }
}
