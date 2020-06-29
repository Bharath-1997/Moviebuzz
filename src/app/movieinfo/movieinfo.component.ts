import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovielistComponent } from '../movielist/movielist.component';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {
  recievedRow;
  imgsrc:string;
  wiki:string;
  url: SafeResourceUrl;
   constructor(private sanitizer:DomSanitizer,public dialogRef:MatDialogRef<MovielistComponent>,
     @Inject(MAT_DIALOG_DATA)public data:any) { 
       this.recievedRow=data;
       this.imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbNpnfOB2P-cWuGoTIJrSTnbyugR0faFv03_bE0rX_i7RDz3I7g&s";
       if(data.img!=null)
       {
         this.imgsrc=this.recievedRow.img;
       }
       this.wiki='https://en.wikipedia.org/wiki/'+this.data.name;
       this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.wiki);
      //console.log("wiki url "+this.url);
     }
 
   ngOnInit() {
    //console.log("inside the movieinfo "+this.data);
   }
 
   members: {title: string, subtitle: string, content: string, url: string}[] = [
    {title: 'Title', subtitle: 'Subtitle', content: 'sonckdh', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
   ];

 }
