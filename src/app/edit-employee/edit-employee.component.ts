import { Component, OnInit } from '@angular/core';
import SampleJson from "../../assets/listEmployee.json";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  data: any
  constructor() { }

  ngOnInit(): void {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    var formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" });

    var filterData = SampleJson.filter((a : any) => a.id === id);
    filterData[0].basicSalary = formatter.format(filterData[0].basicSalary);
    this.data = filterData[0];
  }

}
