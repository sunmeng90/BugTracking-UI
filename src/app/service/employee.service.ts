import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Employee} from '../model/employee';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BASE_URL = environment.API_URL;
  private employeeUrl = 'employees';

  constructor(private http: HttpClient) {
  }

  getEmployees(filter: string, pageIndex: number, pageSize: number, sortOrder: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.BASE_URL + this.employeeUrl, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      }),
      params: new HttpParams().set('filter', filter)
        .set('pageIndex', pageIndex.toString())
        .set('pageSize', pageSize.toString())
        .set('sortOrder', sortOrder)
    }).pipe(catchError(this.handleError('getEmployees', [])));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  createEmployee(emp: Employee) {
    return this.http.post(this.BASE_URL + this.employeeUrl, emp, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    }).pipe(catchError(this.handleError('createEmployees', [])));
  }
}
