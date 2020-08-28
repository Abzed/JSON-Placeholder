import { HttpClient} from '@angular/common/http';
import { Posts } from './../post-class/posts';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

posts:Array<any>;

  constructor(private http: HttpClient) {
    this.posts = new Array<any>();
  }

  ngOnInit(): void {
    this.http.get<any>("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{
     this.posts = data
    console.log(data);
      
    })
  }
  
}
interface ApiResponse{
  title:string;
  body:string;
}
  


