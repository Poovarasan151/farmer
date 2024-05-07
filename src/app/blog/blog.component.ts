import { Component } from '@angular/core';
import { Post } from '../model/post';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  user1:any=new Post();
  imageUrls: string[] = [];
  posts: any[] = [];

  imageNames: string[] = [];
  baseUrl: string = 'http://localhost:8080/';
  

  constructor( private signinService:AuthenticationService,private router: Router,private http: HttpClient ){}

  ngOnInit(): void {
    this.getUserList();
    console.log()

    this.http.get<string[]>('http://localhost:8080/api/v1/post/images')
    .subscribe(
      (names) => {
        this.imageNames = names;
        console.log(this.imageNames);
      },
      (error) => {
        console.error('Error fetching image names:', error);
      }
    );
  }

  getUserList(){
    this.signinService.getUserList().subscribe({
      next:(res)=>{
        console.log('Data retrived successfully:',res);
        this.posts=res.response.contents;


        if (this.user1 && this.user1[0].img) {
          // 'image' property exists and has a value
          // console.log('Image is present:', this.user1[0].img);
          // console.log('Image is present:', this.user1[0].imageData);
        }
        // const imageUrl = this.user1[0].img; 
        // this.displayImage(imageUrl);


      },
      error:console.log,   
      
    })   
  }
  







}
