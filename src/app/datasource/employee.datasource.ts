import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {DataSource} from '@angular/cdk/table';
import {CollectionViewer} from '@angular/cdk/collections';

export class EmployeeDatasource implements DataSource<Employee> {

  private employeeSubject = new BehaviorSubject<Employee[]>([]);

  private employeeTotalCountSubject = new BehaviorSubject<number>(0);

  constructor(private employeeService: EmployeeService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Employee[]> {
    return this.employeeSubject;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.employeeSubject.complete();
    this.employeeTotalCountSubject.complete();
  }

  loadEmployees(filter: string, pageIndex: number, pageSize: number, sortOrder: string) {
    return this.employeeService.getEmployees(filter, pageIndex, pageSize, sortOrder).subscribe(
      pageData => {
        this.employeeSubject.next(pageData['data']);
        this.employeeTotalCountSubject.next(pageData['total']);
      }
    );
  }
}
