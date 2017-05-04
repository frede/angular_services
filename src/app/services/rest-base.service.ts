import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestBaseService<T> {
  apiEndpoint:string; 

  constructor(private http: Http) { 
    console.log('RestBaseService created', this.apiEndpoint)
  }

  getItem(identifier: number | string):Observable<T> {
    return this.http.get(`${this.apiEndpoint}/${identifier}`)
                    .map(res => res.json());
  }

  getItems():Observable<T[]> {
    return this.http.get(`${this.apiEndpoint}`)
                    .map(res => res.json())
  }

  public get endpoint(): string {
    return this.apiEndpoint;
  }

}
