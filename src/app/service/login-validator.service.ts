import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {EmployeeService} from './employee.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginValidatorService implements AsyncValidator {

  constructor(private employeeService: EmployeeService) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.employeeService.loginExists(control.value)
      .pipe(
        map(data => {
          console.log('response', data);
          return null;
        }),
        catchError( err => {
          console.log("login id error: ", err);
          return null;
        })
      );
  }
}
