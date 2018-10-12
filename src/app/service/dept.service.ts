import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Dept} from '../model/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  private BASE_URL = environment.API_URL;
  private departmentUrl = 'departments';

  constructor(private http: HttpClient) {
  }

  getDepartments(): Observable<Dept[]> {
    return this.http.get<Dept[]>(this.BASE_URL + this.departmentUrl, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    }).pipe(catchError(this.handleError('getDepartments', [])));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
