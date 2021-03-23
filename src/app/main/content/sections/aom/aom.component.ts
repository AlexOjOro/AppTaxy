import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aom',
  templateUrl: './aom.component.html',
  styleUrls: ['./aom.component.scss']
})
export class AOMComponent implements OnInit {

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
