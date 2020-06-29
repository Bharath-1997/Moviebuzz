import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AngularFireDatabase } from "@angular/fire/database";
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private firestore:AngularFirestore,private userservie:UserService,private firebase:AngularFireDatabase) { }
upload(data)
{
  this.firestore.collection('movies').add(data);
}
feedback(data)
{
  this.firestore.collection('feedbacks').add(data);
}
feedbacks(msg:string)
{
var washingtonRef=this.firestore.collection('users').doc(this.userservie.afAuth.auth.currentUser.uid);
  washingtonRef.update({
    feedback: firebase.firestore.FieldValue.arrayUnion(msg)
});


}
getmovies()
{
  //console.log("movies "+this.firestore.collection('movies').snapshotChanges());
  return this.firestore.collection('movies').snapshotChanges();
  
}
filtermovies(str:string)
{
 //console.log("the selected value in service"+str);
  //console.log("movies "+this.firestore.collection('movies').snapshotChanges());
//  return this.firestore.collection('movies',
//                    ref => ref.where('category', '==', str.toString())).snapshotChanges();
                  
var catarr = str.toString().split(',');
//console.log("the array is "+typeof catarr);             
//  return this.firestore.collection('movies',
//                    ref => ref.where('category', 'in', catarr)).snapshotChanges();
                   
 
return this.firestore.collection('movies',
                   ref => ref.where('catarr', 'array-contains-any', catarr)).snapshotChanges();
  
}

}
