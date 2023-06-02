import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  private userUrl = 'https://jsonplaceholder.typicode.com/users/2';

  getUser(): Observable<any> {
    return this.http.get(`${this.userUrl}`);
  }
  getuPosts(): Observable<any> {
    return this.http.get(`${this.userUrl}/posts`);
  }
  getuComment(): Observable<any> {
    return this.http.get(`${this.userUrl}/comments`);
  }
}
