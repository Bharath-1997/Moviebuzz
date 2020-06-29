import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:UserService,private router:Router) { }

  ngOnInit() {
  }
  isloggedin()
  {
      
      let user =sessionStorage.getItem('token')
      return !(user === null)     
  }
  Logout()
{
  this.auth.Logout();
  this.router.navigate(['sign-in']);
}
isadmin()
{
  let user=sessionStorage.getItem('token');
  return (user==='eHLedPitBXPQQMqgdMsxs0JtrB53');
}
}
