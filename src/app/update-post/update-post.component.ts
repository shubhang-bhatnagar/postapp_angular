import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent {
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getPostById(postId);
  }

  updatePost() {
    this.postService.updatePost(this.post);
  }

}
