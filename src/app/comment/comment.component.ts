import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment="";
  userName="";
  postComment=[{
    comment:this.comment,
    userName:this.userName
  }];
  constructor() { }
  post(){
    // @ts-ignore
    this.postComment.push({comment:this.comment,userName:this.userName});
    // @ts-ignore
    // this.postComment.push(this.comment);
    this.comment="";
    this.userName="";
  }
  ngOnInit(): void {
  }

}
