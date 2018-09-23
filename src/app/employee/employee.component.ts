import {Component, OnInit} from '@angular/core';
import {EmployeeDataSource} from '../datasource/employeeDataSource';
import {EmployeeService} from '../service/employee.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource: EmployeeDataSource;
  displayedColumns: string[] = ['id', 'loginId', 'firstName', 'lastName'];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.dataSource = new EmployeeDataSource(this.employeeService);
    this.dataSource.loadEmployees('', 1, 10, 'asc');
  }

  editEmployee(employee: Employee) {

  }

  deleteEmployee(employee: Employee) {

  }
}
