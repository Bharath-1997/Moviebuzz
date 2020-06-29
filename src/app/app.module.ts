import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieformComponent } from './movieform/movieform.component';
import  {AngularFireModule} from  "@angular/fire";
import { environment } from 'src/environments/environment';
import { MovieService } from './movie.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule, MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { MovieplayComponent } from './movieplay/movieplay.component';
import { MatDialogModule } from "@angular/material";
import {MatProgressSpinnerModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import {AngularFirestoreModule  } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from "@angular/material/input";
import { RatingsComponent } from './ratings/ratings.component';
import { IsloggedinGuard } from './isloggedin.guard';
import { AngularFireDatabase } from "@angular/fire/database";
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    MovielistComponent,
    MovieformComponent,
    MovieinfoComponent,
    MovieplayComponent,
    RatingsComponent,
    FeedbackComponent
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    FlexLayoutModule,
    MatInputModule,
    

  ],
  providers: [MovieService,AngularFirestore,UserService,AuthGuard,IsloggedinGuard,AngularFireDatabase],
  bootstrap: [AppComponent],
  entryComponents:[MovieplayComponent,MovieinfoComponent]
})
export class AppModule { }
