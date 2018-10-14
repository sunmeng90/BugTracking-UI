import {Component, OnInit} from '@angular/core';
import {AsyncValidatorFn, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Dept} from '../model/dept';
import {DeptService} from '../service/dept.service';
import {Role} from '../model/role';
import {RoleService} from '../service/role.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

//https://www.concretepage.com/angular-2/angular-2-4-child-routes-and-relative-navigation-example
@Component({
  selector: 'app-employee-editor',
  templateUrl: './employee-editor.component.html',
  styleUrls: ['./employee-editor.component.css']
})
export class EmployeeEditorComponent implements OnInit {

  currentEmployee: Employee = {} as Employee;

  employeeForm = this.fb.group(
    {
      id: [''],
      loginId: ['', , loginIdValidator(this.employeeService)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', emailValidator()],
      gender: ['', Validators.required]
    }
  );

  employeeDeptRoleForm = this.fb.group(
    {
      role: ['', Validators.required],
      deptId: ['']
    }
  );

  employeeProjectForm = this.fb.group(
    {
      project: ['']
    }
  );

  departments: Dept[] = [];
  roles: Role[] = [];

  constructor(private fb: FormBuilder,
              private _route: ActivatedRoute,
              private _router: Router,
              private employeeService: EmployeeService,
              private deptService: DeptService,
              private roleService: RoleService) {
  }

  ngOnInit() {
    this.deptService.getDepartments()
      .subscribe(data => {
        this.departments = data;
      });
    this.roleService.getRoles()
      .subscribe(data => {
        this.roles = data;
      });

    this._route.params.subscribe(
      param => {
        let employee = Object.assign({}, param);
        let [role, deptId] = [employee['role'], employee['deptId']];
        delete employee['role'];
        delete employee['deptId'];
        delete employee['hireDate'];
        this.employeeForm.setValue(employee);
        this.employeeDeptRoleForm.setValue({'role': role, 'deptId': deptId});
      }
    );
  }

  /**
   * Angular uses object identity to select option. It's possible for the identities of items to change while the data does not. This can happen, for example, if the items are produced from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the second response will produce objects with different identities.

   To customize the default option comparison algorithm, <select> supports compareWith input. compareWith takes a function which has two arguments: option1 and option2. If compareWith is given, Angular selects option by the return value of the function.

   * https://angular.io/api/forms/SelectControlValueAccessor
   * @param c1
   * @param c2
   */
  compareFn(c1, c2): boolean {
    return c1 && c2 && c1 == c2;
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    let deptRole = Object.assign({}, this.employeeDeptRoleForm.value);
    deptRole['role'] = {id: deptRole['role']};
    let emp: Employee = Object.assign({}, this.employeeForm.value, deptRole);
    this.employeeService.createEmployee(emp).subscribe();
    //TODO: submit project
  }

  get loginId() {
    return this.employeeForm.get('loginId');
  }

  get email(){
    return this.employeeForm.get('email');
  }
}

export function loginIdValidator(employeeService: EmployeeService): AsyncValidatorFn {
  return (control: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return employeeService.loginExists(control.value)
      .pipe(
        map(data => {
          return {'error': 'login ' + control.value + ' exists.'};
        }),
        catchError((err: HttpErrorResponse) => {
          console.log('validate error: ', err);
          if (err.status == 404) {
            return of(null);
          } else {
            return of({'error': 'login ' + control.value + ' validate failed, ' + err});
          }
        })
      );
  };
}

export function emailValidator(): ValidatorFn {
  return (control: FormControl): Validators | null => {
    let email = control.value;
    if (!(/^[a-z,0-9]+[a-z,0-9,_]*\@[a-z,0-9]+\.[a-z]+$/.test(email))) {
      return {'error': 'email format not valid'};
    } else {
      return null;
    }
  };

}
