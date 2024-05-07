import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

@Injectable({ providedIn: 'root' })

/**
 * Auth-service Component
 */
export class AuthenticationService {



    // public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
      
     }
    //  signIn(email: string, password: string):Observable<any> {
    //     console.log(email,password)
    //     return this.http.post<any>('http://localhost:8082/api/v1/auth/authenticate',{ email, password });
    
    // }
    // Register(firstname:string, lastname:string, email: string, password: string, role:string):Observable<any> {
    //     return this.http.post<any>('http://localhost:8082/api/v1/auth/register',{firstname,lastname, email, password, role });
    

    getUserList():Observable<any>{
      return this.http.get<any>('http://localhost:8080/api/v1/post');
    
    }
    // getAllImages(): Observable<any> {
    //   return this.http.get<any>('http://localhost:8080/api/v1/post/images');
    // }

    getAllImageUrls(): Observable<string[]> {
      return this.http.get<string[]>('http://localhost:8080/api/v1/post/images');
    }
  


}


