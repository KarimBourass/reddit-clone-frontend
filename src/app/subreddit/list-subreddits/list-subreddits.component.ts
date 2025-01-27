import { Component, OnInit } from '@angular/core';
import { SubredditModel } from '../subreddit-model';
import { SubredditService } from '../subreddit-service';

@Component({
  selector: 'app-list-subreddits',
  templateUrl: './list-subreddits.component.html',
  styleUrls: ['./list-subreddits.component.css']
})
export class ListSubredditsComponent implements OnInit {

  subreddits: Array<SubredditModel>;

  constructor(private subredditService: SubredditService) { }

  ngOnInit()
   {
    this.subredditService.getAllSubreddits().subscribe(
      data => {
      this.subreddits = data;
        }, 
    error => {
           console.log("there is an eror, "+error);
           
    })
  }

}
