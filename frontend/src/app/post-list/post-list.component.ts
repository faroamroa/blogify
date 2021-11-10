import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import {PostService} from '../services/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postsSub: Subscription;
  constructor(public postService: PostService) {
    this.postsSub = this.postService
    .getPostUpdateListener()
    .subscribe((posts:Post[]) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  ngOnDestroy(): void{
    this.postsSub.unsubscribe();
  }

}
