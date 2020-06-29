import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';
import { UserService } from '../user.service';
import { MovieService } from '../movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private userservice:UserService,private mservice:MovieService,private toaster:ToastrService) { }
feedback:string;
  ngOnInit() {
  }
  send()
  {
    let email=this.userservice.afAuth.auth.currentUser.email.toString();
    let data={};
    data['email']=email;
    data['feed']=this.feedback;
    //this.mservice.feedback(data);
    this.mservice.feedbacks(this.feedback);
    this.feedback='';
    this.toaster.success('Successfully sent your feedback','Feedback');
  }
}
