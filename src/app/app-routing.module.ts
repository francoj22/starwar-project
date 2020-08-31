import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'blog-post'},
  {path: 'blog-post', component: BlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
