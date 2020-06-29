import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth:UserService,private router:Router) { }
  email:string;
  password:string;
  ngOnInit() {
    if(this.auth.isloggedin())
    {
      
      this.router.navigate(['list']);
      
    }
  }
  check()
  {
    if(this.email.includes("@")&&this.email.includes(".com"))
    {
    return false;
    }
    return true;
  }

signup()
{
  this.auth.signup(this.email,this.password);
}

}
