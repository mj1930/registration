import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _router: Router, private http: Http) { }
  public BASE_URL: string = environment.config.BASE_URL;

  register(userData) {
    return this.http.post(`${this.BASE_URL}user/register`, {userData}).
      toPromise().then((res: Response) => res.json());
  }
}
