import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { News01Component } from './news01/news01.component';

@NgModule({
   declarations: [
      AppComponent,
      NewsComponent,
      ProductComponent,
      HomeComponent,
      News01Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      HttpClientJsonpModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
