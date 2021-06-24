import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getMember(id: any) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/', {headers: this.httpHeaders})
  };

  updateMember(member: any) : Observable<any> {
    let body = {
      id: member.id,
      name: member.name,
      surname: member.surname,
      phone: member.phone,
      email: member.email,
      address: member.address
    }
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body, {headers: this.httpHeaders})
  };

  deleteMember(id: number) : Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/', {headers: this.httpHeaders})
  };

  newMember(member: any) : Observable<any> {
    let body = {
      id: member.id,
      name: member.name,
      surname: member.surname,
      phone: member.phone,
      email: member.email,
      address: member.address
    }
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body, {headers: this.httpHeaders})
  };

  saveMember(member: any) : Observable<any> {
    return this.http.post(this.baseUrl + 'members/', member, {headers: this.httpHeaders})
  };
}
