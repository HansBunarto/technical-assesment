import { Component, OnInit } from '@angular/core';
import SampleJson from "../../assets/listEmployee.json";

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit(): void {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);

    var formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" });
    console.log(SampleJson);
    var filterData = SampleJson.filter((a : any) => a.id === id);
    console.log(filterData);
    filterData[0].basicSalary = formatter.format(filterData[0].basicSalary);
    this.data = filterData[0];
  }

}
