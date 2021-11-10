import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:Post[] = [];
  postUpdated = new Subject<Post[]>();

  constructor(private router: Router) { }

  addPost(post: Post){
    this.posts.push(post);
    // Generar notificacion de actualizacion a los componenetes suscritos al Subject
    this.postUpdated.next([...this.posts])
    this.router.navigate(['/']);
  }

  getPosts(){
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }

}
