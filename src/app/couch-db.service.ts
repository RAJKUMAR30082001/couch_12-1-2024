import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouchDbService {
  readonly baseURL = 'http://localhost:3000/api/customer'; // Update with your Express server endpoint
  readonly username = 'rajkumar';
  readonly password = 'rajraina45';

  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    return this.http.post<any>(this.baseURL, data, { headers });
  }
}
