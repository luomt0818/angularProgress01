import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { News01Component } from './news01/news01.component';

const routes: Routes = [
  {
  path:'home',component:HomeComponent
  },
  {
  path:'news',component:News01Component
  },
  {
  path:'product',component:ProductComponent
  },
  {
    path:'**',redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
