import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/post';


@Component({
  selector: 'app-dashboard',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent  {

  user: Post = new Post();

  constructor(private router: Router, private http: HttpClient) {}

  onFileSelected(event: any) {
    this.user.img = event.target.files[0] as File;
  }

  uploadImage() {
    const formData: FormData = new FormData();
    formData.append('image', this.user.img || ''); 
    formData.append('data', this.user.data || '');
    formData.append('name', this.user.name || '');
    formData.append('content', this.user.content || '');
    formData.append('imageData', this.user.imageData || '');

    this.http.post('http://localhost:8080/api/v1/post', formData)
      .subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
          // Handle success response
        },
        (error) => {
          console.error('Error uploading file:', error);
          // Handle error response
        }
      );
  }



}