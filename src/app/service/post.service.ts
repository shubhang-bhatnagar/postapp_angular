import { Injectable } from '@angular/core';
import { Post } from '../model/post';
//only creates a single instance of the object , and tells that component that the service is needed .
//it also tells that it is a service , it we remove injectable then it will act as a normal class. 
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private allPosts:Post[]=[];


  constructor() { }

  addPost(userPost:Post) {
    this.allPosts.push(userPost);
    console.log(this.allPosts);
  }

getPost():Post[]
{
  return this.allPosts;
}
//create a hashmap to get the post with the coresponding id.
getPostById(id:string):Post
{
  let post:Post;
  for(let i=0;i<this.allPosts.length;i++)
    {
      if(id===this.allPosts[i].id)
        {
          post=this.allPosts[i];
          break;
        }
    }
    return post;

  
}

deletePostById(id: string) {
  //this.allPosts.filter(...): This part of the code creates a new array containing only the elements that meet a certain condition. The filter method iterates over each element (in this case, each post) in the allPosts array and applies a provided function to each element. If the function returns true, the element is included in the new array; if it returns false, the element is excluded.
  this.allPosts = this.allPosts.filter(post => post.id !== id);
}

updatePost(updatedPost: Post) {
  const index = this.allPosts.findIndex(post => post.id === updatedPost.id);
  if (index !== -1) {
    this.allPosts[index] = updatedPost;
  }
}

}
