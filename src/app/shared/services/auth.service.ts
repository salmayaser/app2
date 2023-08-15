import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    let body = {
      username: username,
      password: password,
    };
    return this.http.post<User>(this.loginUrl, body);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
}
