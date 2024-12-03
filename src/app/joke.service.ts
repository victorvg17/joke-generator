import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  url = 'https://icanhazdadjoke.com/';
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }
}
