import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/auth/login/login.component';
import { SignupComponent } from './Modules/auth/signup/signup.component';
import { HeroComponent } from './Modules/shared/components/hero/hero.component';
import { PageNotFoundComponent } from './Modules/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HeroComponent},

  {path:'auth',loadChildren:() => import('./Modules/auth/auth.module').then(m=>m.AuthModule)},
  
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
