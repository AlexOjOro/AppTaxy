import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

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
