import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from '../user.service';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent implements OnInit {

  constructor(private mservice:MovieService,private userservice:UserService) { }
  userid:any;
  name:any;
  catarr:any;
  desc:any;
  img:any;
  url:any;
  

  ngOnInit() {
    // var  user=this.userservice.afAuth.user.subscribe(user=>{
    //   console.log("id"+user.uid);
    //    this.userid=user.uid;
    // });
  }
  str:string;
  toppings = new FormControl();
  toppingList: string[] = ['Action','Family','Mystery','War','Sport','Crime', 'Drama', 'Thriller','Horror','Comedy', 'Animation','Adventure', 'Fantasy','Sci-Fi'];
  onSubmit(form:NgForm)
  {
    let data=Object.assign({},form.value);
   this.mservice.upload(data);
    form.reset();
  }

}
