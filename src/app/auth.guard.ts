import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:UserService,private router:Router,private afauth:AngularFireAuth)
{

}
canActivate():boolean
{
      if(this.authService.isloggedin()&&(this.authService.afAuth.auth.currentUser.uid))
      {
        
            return true;
      }
     else
      {
          //console.log("inside canaactivate 1.1");
          sessionStorage.removeItem('token');
           this.router.navigate(['sign-in'])
           return false;
      }
      
}
iscurrentuser():boolean
{
  this.afauth.user.subscribe(user=>{
         this.authService.uid=user.uid;
  });
  if(sessionStorage.getItem('token').toString()===this.authService.uid)
  {
  console.log("token "+sessionStorage.getItem('token').toString());
  console.log("uid "+this.afauth.auth.currentUser.uid.toString());
  return true;
  }
  else
  {
  return false;
  }
}
  
}
