import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeDataSource} from '../datasource/employeeDataSource';
import {EmployeeService} from '../service/employee.service';
import {Employee} from '../model/employee';
import {MatPaginator, PageEvent} from '@angular/material';
import {fromEvent} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements AfterViewInit, OnInit {
  dataSource: EmployeeDataSource;
  displayedColumns: string[] = ['id', 'loginId', 'firstName', 'lastName'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService) {
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

  }

  deleteEmployee(employee: Employee) {

  }
}
