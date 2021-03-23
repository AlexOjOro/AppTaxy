import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  listData: any[];
  loading = false;
  station: string = 'SITE';
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
