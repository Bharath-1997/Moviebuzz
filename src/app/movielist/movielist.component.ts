import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { MatDialog,MatDialogConfig, MatBottomSheetContainer } from "@angular/material";
import { MovieinfoComponent } from '../movieinfo/movieinfo.component';
import { MovieplayComponent } from '../movieplay/movieplay.component';
import {FormControl} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FirebaseAuth } from "@angular/fire";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MovielistComponent implements OnInit {

  movies:any[];
  showspinner:boolean;
  breakpoint: number;
  toppings = new FormControl();
  cate:string;
  isloading=true;
  toppingList: string[] = ['Action','Family','Mystery','Crime', 'Drama','War','Sport','Thriller','Horror','Comedy','Adventure','Animation','Fantasy','Sci-Fi'];
  constructor(private mservice:MovieService,private dialog:MatDialog,@Inject(DOCUMENT) private _document) {
    
   }
   
ngOnInit() {
  this.showspinner=false;
  this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  this.mservice.getmovies().subscribe(actionArray =>{
    this.movies=actionArray.map(item=>{
      return {
        
        id:item.payload.doc.id,
        ...(item.payload.doc.data() as object) } as Movie;
         
    })
    this.isloading=false;
  });  
  setTimeout(() => {
    this.showspinner = true;
    if(this.movies)
    {
      this.showspinner=true;
    }
  }, (window.innerWidth <= 400) ? 1000 : 7000);
this.showspinner=false;
this.toppings.reset();
this._document.body.classList.add('bodybg-color');
//this._document.body.style.background = '#101010';
 }

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
}

//  oninfo(movie: any)
//   {
// //    const dialogConfig=new MatDialogConfig();
// //    dialogConfig.disableClose=false;
// //    dialogConfig.autoFocus=true;
// //    dialogConfig.width="70%";
// //    this.dialog.open(MovieinfoComponent,dialogConfig);
//    const dialogRef=this.dialog.open(MovieinfoComponent,{
//      width:'70%',
//      data:{
//        name:movie.name,
//        img:movie.img,
//        desc:movie.desc,
//        category:movie.category,
//        url:movie.url
       
//      }
//    });
//   }


// oninfo(movie: any)
//   {
//     let dialogBoxSettings = {
//       width: '73%',
//       disableClose: false,
//       hasBackdrop: true,
//       margin: '0 auto',
//       // panelClass: 'custom-dialog-container',
//       data:{
//         name:movie.name,
//         img:movie.img,
//         desc:movie.desc,
//         category:movie.category,
//         url:movie.url
        
//       }
//     };
//     const dialogRef = this.dialog.open(MovieinfoComponent,dialogBoxSettings);
//   }

  oninfo(movie: any)
{
  let dialogBoxSettings = {
    height: '79%',
    width: '70%',
    disableClose: false,
    hasBackdrop: true,
    margin: '0 auto',
    data:{
      name:movie.name,
      img:movie.img,
      desc:movie.desc,
      category:movie.category,
      url:movie.url
      
    }
  };
  const dialogRef = this.dialog.open(MovieinfoComponent,dialogBoxSettings);
 
}


//   onplay(movie: any)
//   {
// //    const dialogConfig=new MatDialogConfig();
// //    dialogConfig.disableClose=false;
// //    dialogConfig.autoFocus=true;
// //    dialogConfig.width="70%";
// //    this.dialog.open(MovieinfoComponent,dialogConfig);
//    const dialogRef=this.dialog.open(MovieplayComponent,{
//      width:'70%',
//      height:'80%',
//      panelClass: 'custom-dialog-container',
//      data:{
//        name:movie.name,
//        img:movie.img,
//        desc:movie.desc,
//        category:movie.category,
//        url:movie.url
       
//      }
//    });
//   }


onplay(movie: any)
{
  let dialogBoxSettings = {
    height: '79%',
    width: '70%',
    disableClose: false,
    hasBackdrop: true,
    margin: '0 auto',
    panelClass: 'custom-dialog-container2',
    data:{
      name:movie.name,
      img:movie.img,
      desc:movie.desc,
      category:movie.category,
      url:movie.url
      
    }
  };
  const dialogRef = this.dialog.open(MovieplayComponent,dialogBoxSettings);
 
}

  
  public performSearch(value)
  {
    this.mservice.filtermovies(value).subscribe(actionArray =>{
      this.movies=actionArray.map(item=>{
        return {
          
          id:item.payload.doc.id,
          ...(item.payload.doc.data() as object) } as Movie;
            
      })
    });  
        
  }
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('bodybg-color');
  }

 }


