import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import SampleJson from "../../assets/listEmployee.json";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  maxDate = new Date().toISOString().split("T")[0];

  createEmployeeForm = this.formBuilder.group({
    userName: '',
    firstName: '',
    lastName: '',
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    birthDate: new Date(),
    basicSalary: 0,
    status: '',
    group: '',
    description: new Date()
  });

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    var value = this.createEmployeeForm.value;
    var id = Guid.create().toString();
    var createdObject = {
      "id": id,
      "index": SampleJson.length + 1,
      "userName": value.userName,
      "firstName": value.firstName,
      "lastName": value.lastName,
      "email": value.email,
      "birthDate": value.birthDate?.toString(),
      "basicSalary": value.basicSalary,
      "status": value.status,
      "group": value.group,
      "description": value.description?.toString()
    }
    SampleJson.push(createdObject);
    this.router.navigate(['/employee/list']);
  }

  public backToList() {
    this.router.navigate(['/employee/list']);
  }

}
