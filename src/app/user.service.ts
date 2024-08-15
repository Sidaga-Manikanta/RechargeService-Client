import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private auth = 'https://service1-sjlm.onrender.com/api/user';


  constructor(private http: HttpClient) {}
  mobileNumber :number |null=null

  checkUser(mobileNumber: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.auth}/auth?mobileNumber=${mobileNumber}`);
  }

  getCurrentUser():Observable<number>{
    return this.http.get<number>(`${this.auth}/currentUser`)
  }


}
