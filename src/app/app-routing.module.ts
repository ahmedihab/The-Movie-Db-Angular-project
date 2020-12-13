import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuradService } from './auth-gurad.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LatsetComponent } from './latset/latset.component';
import { MovieDetilesComponent } from './movie-detiles/movie-detiles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularComponent } from './popular/popular.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TvComponent } from './tv/tv.component';
import { UpcomingComponent } from './upcoming/upcoming.component';


const routes: Routes = [
  {path:'' , component:HomeComponent },
  {path:'registr', component:RegisterComponent},
  {path:'signin',component:SigninComponent},
  {path:'top-Rater',canActivate:[AuthGuradService], component:TopRatedComponent },
  {path:'Upcoming',canActivate:[AuthGuradService], component:UpcomingComponent},
  {path:'latset', canActivate:[AuthGuradService],component:LatsetComponent},
  {path:'Popular', canActivate:[AuthGuradService],component:PopularComponent},
  {path:'Now-playing',canActivate:[AuthGuradService], component:NowPlayingComponent},
  {path:'Contact',canActivate:[AuthGuradService], component:ContactUsComponent},
  {path:'Tv', canActivate:[AuthGuradService],component:TvComponent},
  {path:'home',canActivate:[AuthGuradService], component:HomeComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuradService],component:MovieDetilesComponent},
  {path:'**' , component:NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
