import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css','../app.component.css','../reponsiveCategory.css']
})
export class CommentComponent implements OnInit {
  comment="";
  userName="";
  postComment=[{
    comment:this.comment,
    userName:this.userName
  }];
  data:any=[];
  constructor() { }
  post(){
    // @ts-ignore
    this.postComment.push({comment:this.comment,userName:this.userName});
    // @ts-ignore
    this.comment="";
    this.userName="";
  }
  ngOnInit(): void {
    localStorage.setItem("comment",JSON.stringify(this.postComment));
  }

}
