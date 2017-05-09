import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class UserService {
  private heroesUrl = 'https://api.worldoftanks.ru/wot/account';  // URL to web api
  constructor(private http: Http) { }

  getSuggestedUsers(id: string): Promise<Object> {
    const url = '/list/?application_id=demo';
    return this.http.get(`${this.heroesUrl}${url}&search=${id}`)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  getUser(id: string): Promise<Object> {
    const url = '/info/?application_id=demo';
    return this.http.get(`${this.heroesUrl}${url}&account_id=${id}`)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
