import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Dept} from '../model/dept';
import {DeptService} from '../service/dept.service';

@Component({
  selector: 'app-employee-editor',
  templateUrl: './employee-editor.component.html',
  styleUrls: ['./employee-editor.component.css']
})
export class EmployeeEditorComponent implements OnInit {

  employeeForm = this.fb.group(
    {
      loginId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required]
    }
  );

  employeeDeptRoleForm = this.fb.group(
    {
      role: ['', Validators.required],
      department: ['']
    }
  );

  employeeProjectForm = this.fb.group(
    {
      project: ['']
    }
  );

  departments: Dept[] = [];

  constructor(private fb: FormBuilder, private deptService: DeptService) {
  }

  ngOnInit() {
    this.deptService.getDepartments()
      .subscribe(data => {
        this.departments = data;
      });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.employeeForm.value);
    console.warn(this.employeeDeptRoleForm.value);
    console.warn(this.employeeProjectForm.value);
  }
}
