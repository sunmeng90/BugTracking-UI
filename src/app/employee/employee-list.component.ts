import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeDataSource} from '../datasource/employeeDataSource';
import {EmployeeService} from '../service/employee.service';
import {Employee} from '../model/employee';
import {MatPaginator} from '@angular/material';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements AfterViewInit, OnInit {
  dataSource: EmployeeDataSource;
  displayedColumns: string[] = ['id', 'loginId', 'firstName', 'lastName', 'gender', 'birthDate', 'email', 'role', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService,
              private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataSource = new EmployeeDataSource(this.employeeService);
    this.dataSource.loadEmployees('', 1, 10, 'asc');
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadEmployees())
      ).subscribe();
  }

  loadEmployees() {
    const pageIndex = this.paginator.pageIndex === 0 ? 1 : this.paginator.pageIndex;
    this.dataSource.clear();
    this.dataSource.loadEmployees('', pageIndex, this.paginator.pageSize, 'asc');
  }

  editEmployee(employee: Employee) {
    let emp:Object = Object.assign({}, employee);
    emp['role'] = employee.role.id;
    this._router.navigate(['../createEmployee', emp], { relativeTo: this._route})

  }

  deleteEmployee(employee: Employee) {

  }
}
