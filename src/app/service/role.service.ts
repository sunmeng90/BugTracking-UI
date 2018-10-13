import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Role} from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private BASE_URL = environment.API_URL;
  private roleUrl = 'roles';

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.BASE_URL + this.roleUrl, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    }).pipe(catchError(this.handleError('getRoles', [])));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
