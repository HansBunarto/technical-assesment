import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SampleJson from "../../assets/listEmployee.json";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  listEmployee = SampleJson;
  search: string = "";
  data: any[] = [];
  ascending: boolean = false;
  count: number = 0;
  pageSize: number = 0;
  pageIndex: number = 0;
  pageDifference : number = 0;
  pageEndRange : number = 0;
  pageStartRange = 1;

  constructor(private router: Router) {
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageDifference = this.pageSize - this.pageIndex;
    this.pageEndRange = this.pageIndex * this.pageSize;
    this.data = [];
  }

  ngOnInit(): void {
    this.getAll();
    var search = localStorage.getItem("search");
    if(search) {
      this.search = search;
      this.onSearchChanges();
      this.sortUsername(this.ascending);
    } else {
      this.sortUsername(this.ascending);
    }
  }

  pageChanged(Event: number): any {
    this.pageIndex = Event;
    this.pageEndRange = this.pageIndex * this.pageSize;
    this.pageStartRange = this.pageEndRange - this.pageDifference;
    this.getAll();
  }

  getAll() {
    this.data = [];
    for (let x = this.pageStartRange; x <= this.pageEndRange; x++) {
      this.listEmployee.forEach((res : any)=>{
        if(res.index == x){
          this.data.push(res);
        }
      });
    }
    this.count = this.listEmployee.length;
  }

  public onSearchChanges() {
    localStorage.setItem("search", this.search);
    var searchList = this.listEmployee.filter((a: any) =>
      a.userName.toLowerCase().includes(this.search) ||
      (a.firstName.toLowerCase().includes(this.search) && a.email.toLowerCase().includes(this.search))  
    );
    this.data = searchList;

    if(this.search === "") {
      this.getAll();
    }
  }

  public removeData(index: number) {
    this.listEmployee.splice(index, 1);
    this.getAll();
  }

  public logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  public createEmployee() {
    this.router.navigate(['/employee/create']);
  }

  public sortUsername(asc: boolean) {
    if (!asc) {
      this.data.sort((a:any,b: any) => (a.userName > b.userName) ? 1 : ((b.userName > a.userName) ? -1 : 0));
      this.ascending = true;
    } else {
      this.data.sort((a: any, b: any) => (a.userName < b.userName) ? 1 : ((b.userName < a.userName) ? -1 : 0));
      this.ascending = false;
    }
  }

}
