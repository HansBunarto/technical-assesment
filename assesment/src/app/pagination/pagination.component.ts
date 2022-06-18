import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pageIndex: number = 0; // current offset
  @Input() limit: number = 0; // record per page
  @Input() total: number = 0; // total records
  @Input() range: number = 5;
  @Output() pageChange: EventEmitter<any>;
  totalPageNo : number [];
  totalSizeOfPages : number;

  constructor() { 
    this.totalSizeOfPages = 0;
    this.totalPageNo = [];
    this.pageChange = new EventEmitter<any>()
  }

  ngOnChanges() {
    this.totalSizeOfPages = this.total / this.limit;
    this.totalSizeOfPages = Math.ceil(this.totalSizeOfPages); 
    
    this.totalPageNo = [];
    for(let i=1; i <= this.totalSizeOfPages; i++){
      this.totalPageNo.push(i);
    }
  }

  pageChangeBackward(){
    if(this.pageIndex > 0)
    this.pageIndex = this.pageIndex-1;
    this.pageChange.emit(this.pageIndex); 
  }

  pageChangeIndex(index : number){
    this.pageIndex = index;
    this.pageChange.emit(this.pageIndex);
  }

  pageChangeForward(){
    if(this.pageIndex < this.totalSizeOfPages)
    this.pageIndex = this.pageIndex+1;
    this.pageChange.emit(this.pageIndex);
  }
}
