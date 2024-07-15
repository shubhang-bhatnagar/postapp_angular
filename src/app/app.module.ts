import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ShowPostComponet } from './show-post/show-post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ShowPostComponet,
    DetailPostComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //it is taking array of objects
    RouterModule.forRoot(
      [
        {path:'',component:HomeComponent},
        {path:'create',component:CreateComponent},
        {path:'showPost',component:ShowPostComponet},
        {path:'detail/:id',component:DetailPostComponent},
        { path: 'update-post/:id', component: UpdatePostComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
