import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MovieformComponent } from './movieform/movieform.component';
import { MovielistComponent } from './movielist/movielist.component';
import { AuthGuard } from './auth.guard';
import { RatingsComponent } from './ratings/ratings.component';
import { IsloggedinGuard } from './isloggedin.guard';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  { path: '', redirectTo:'/sign-in',pathMatch:'full'},
  { path: 'sign-in', component:SignInComponent,canActivate:[IsloggedinGuard]},
  { path: 'sign-up', component:SignUpComponent,canActivate:[IsloggedinGuard]},
  { path: 'new', component:MovieformComponent,canActivate:[AuthGuard]},
  { path: 'list', component:MovielistComponent,canActivate:[AuthGuard]},
  { path: 'ratings', component:RatingsComponent,canActivate:[AuthGuard]},
  { path: 'feedback', component:FeedbackComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
