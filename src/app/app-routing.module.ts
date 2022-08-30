import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Modules/shared/components/hero/hero.component';
import { PageNotFoundComponent } from './Modules/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HeroComponent},
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
