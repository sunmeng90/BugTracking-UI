import {Component, OnInit} from '@angular/core';
import {EmployeeDatasource} from '../datasource/employee.datasource';
import {EmployeeService} from '../service/employee.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource: EmployeeDatasource;
  displayedColumns: string[] = ['id', 'loginId', 'firstName', 'lastName'];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.dataSource = new EmployeeDatasource(this.employeeService);
    this.dataSource.loadEmployees('', 1, 10, 'asc');
  }

  editEmployee(employee: Employee) {

  }

  deleteEmployee(employee: Employee) {

  }
}
