import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

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
