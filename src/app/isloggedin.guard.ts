import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IsloggedinGuard implements CanActivate {
  constructor(private authService:UserService,private router:Router)
{

}

canActivate():boolean
    {
          if(!sessionStorage.getItem('token'))
          {
            //console.log("no token inside if");
            return true
            //this.router.navigate([''])
          }
          else
          {
            // if(sessionStorage.getItem('token').toString()===this.authService.afAuth.auth.currentUser.uid)
            // {
            //   console.log("token matched");
            // }
            // else
            // {
            //   console.log("token not matched");
            // }
            //console.log("having token inside else");
            this.router.navigate(['list'])
            return false;
          }
    }

  }
  