import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
