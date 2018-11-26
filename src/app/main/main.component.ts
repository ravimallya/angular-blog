import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
postsData: any[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getJSON().subscribe(data => {
      console.log(data);
      this.postsData = data;
    });
  }

}
