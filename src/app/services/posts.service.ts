import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
  });
   }
  public getJSON(): Observable<any> {
    return this.http.get('./data/blogdata.json');
}
}
