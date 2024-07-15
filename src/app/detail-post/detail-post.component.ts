import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
//it tell which link is active among the other links
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})
export class DetailPostComponent {

   title:string;
   author:string;
   discription:string;

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService)
  {
    //it tracks which component will render, id is key
       let id=this.activatedRoute.snapshot.paramMap.get('id');
       let post=postService.getPostById(id);
       this.title=post.title;
       this.author=post.author;
       this.discription=post.discription;

  }

}
