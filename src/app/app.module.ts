import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { MovieDetilesComponent } from './movie-detiles/movie-detiles.component';
import { RegisterComponent } from './register/register.component' ;
import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import { TextlessPipe } from './textless.pipe';
import { TextlessOverPipe } from './textless-over.pipe';
import { SigninComponent } from './signin/signin.component';
import { TvlessPipe } from './tvless.pipe';
import { TvTitlePipe } from './tv-title.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LatsetComponent } from './latset/latset.component';
import { PopularComponent } from './popular/popular.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TvComponent } from './tv/tv.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchPipe } from './search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetilesComponent,
    RegisterComponent,
    TextlessPipe,
    TextlessOverPipe,
    SigninComponent,
    TvlessPipe,
    TvTitlePipe,
    NavbarComponent,
    TopRatedComponent,
    UpcomingComponent,
    LatsetComponent,
    PopularComponent,
    NowPlayingComponent,
    ContactUsComponent,
    TvComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
