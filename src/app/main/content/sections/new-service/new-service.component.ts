import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent implements OnInit {

  listData: any[];
  loading = false;
  station: string = 'NEWSERVICE';
  columns: Array<any> = ['id', 'name'];
  displayedColumns: Array<string> = this.columns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

  addRecord(){

  }

  editRecord(item: any){

  }

}
