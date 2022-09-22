import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseUrl="http://192.168.0.102:8082/user/login"
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.post(this.baseUrl,user);
  }
}
