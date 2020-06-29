import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovielistComponent } from '../movielist/movielist.component';
import { DOCUMENT  } from "@angular/common";
declare var $: any;
 
@Component({
  selector: 'app-movieplay',
  templateUrl: './movieplay.component.html',
  styleUrls: ['./movieplay.component.css']
})
export class MovieplayComponent implements OnInit {
  name = 'Angular 6';
  safeSrc: SafeResourceUrl;
  public innerWidth:any;
  recievedRow;
  constructor(@Inject(DOCUMENT) private _document,private sanitizer: DomSanitizer,public dialogRef:MatDialogRef<MovielistComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any) { 
      this.recievedRow=data;
      //console.log("video url "+data.url);
      var str=data.url.substring(data.url.lastIndexOf("=") + 1);
      var output = "https://www.youtube.com/embed/"+str+"?autoplay=1";
      //console.log(output);
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(output);
  }
ngOnInit()
{
  // $(document).ready(function() {
  //   alert('I am Called From jQuery');
  // });
  this.innerWidth = window.innerWidth;
  //console.log("width"+innerWidth);
  if(innerWidth<=500)
  {
    this.dialogRef.updateSize('460px', '460px');
  }
  
}

 
}