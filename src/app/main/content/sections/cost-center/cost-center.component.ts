import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.scss']
})
export class CostCenterComponent implements OnInit {

  listData: any[];
  loading = false;
  station: string = 'BUILDING';
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
