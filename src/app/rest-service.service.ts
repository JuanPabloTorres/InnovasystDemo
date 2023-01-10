import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AppUser } from './Model/app-user';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {


  endPoint = 'https://gorest.co.in/public/v2/users';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer b8626f71e0848831afcf5125ce39f9ddad701f99e00d0e6ae39baa15923325a4'
    })
  }

  httpError(error: { error: { message: string; }; status: any; message: any; }) {
    let msg = '';
    
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }


  getUsers(): Observable<AppUser> {
    return this.httpClient.get<AppUser>(this.endPoint)
    .pipe(retry(1),catchError(this.httpError));
  }

  getUser(id: string| null): Observable<AppUser> {
    return this.httpClient.get<AppUser>(this.endPoint + '/users/' + id)
    .pipe(retry(1),catchError(this.httpError));
  }  

  create(user: any): Observable<AppUser> {

    return this.httpClient.post<AppUser>(this.endPoint, JSON.stringify(user), this.httpHeader).pipe(retry(1),catchError(this.httpError));
    
  }  

  update(id: string, data: any): Observable<AppUser> {
    return this.httpClient.put<AppUser>(this.endPoint + '/users/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  delete(id: string){



    return this.httpClient.delete<AppUser>(this.endPoint + '/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

}
