import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  token = 'Token 8055f08406b68ec94898de0bdb6a0fb92526a7f3';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getAllMembers() : Observable<any> {
    return this.http.get(this.baseUrl + 'members/', {headers: this.httpHeaders});
  };

  getMember(id: any) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/', {headers: this.httpHeaders})
  };
}
