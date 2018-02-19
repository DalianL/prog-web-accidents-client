import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  coordinates: any;

  private urlBase = 'http://localhost:8000';
  private apiUrl1;
  private apiUrl2;
  private apiUrl3;
  private apiUrl4;
  private apiUrl5;

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getAccidents(coords: any): Observable<string[]> {
    this.apiUrl1 = this.urlBase + '/getRouteByPosition?lat=' + coords[0] + '&lon=' + coords[1];
    console.log(this.apiUrl1);
    return this.http.get(this.apiUrl1)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getComments(accId: any): Observable<string[]> {
    this.apiUrl2 = this.urlBase + '/getCommentaryById?accidentId=' + accId;
    console.log(this.apiUrl2);
    return this.http.get(this.apiUrl2)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addComment(accId: any, text: any, author: any) {
    this.apiUrl3 = this.urlBase + '/addCommentary?text=' + text + '&accidentId=' + accId + '&auteur=' + author;
    console.log(this.apiUrl3);
    return this.http.get(this.apiUrl3)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addAccident(add: any, dep: any, coords: any, grav: any) {
    this.apiUrl4 = this.urlBase + '/addAccident?adresse=' + add + '&departement=' + dep + '&lat=' + coords.lat + '&lon=' + coords.lng + '&gravite=' + grav;
    console.log(this.apiUrl4);
    return this.http.get(this.apiUrl4)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteComment(comId: any, accId: any) {
    this.apiUrl5 = this.urlBase + '/deleteCommentary?id=' + comId + '&accidentId=' + accId;
    console.log(this.apiUrl5);
    return this.http.delete(this.apiUrl5)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res;
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
