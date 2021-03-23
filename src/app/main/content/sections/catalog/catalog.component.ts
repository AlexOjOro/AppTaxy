import { Component, OnInit, Input, Output,EventEmitter,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { TranslateService } from '../../../../core/services/translate-service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() columns : Array<string>;
  @Input() data : any;
  @Input() station : any;
  @Output() buttonAdd = new EventEmitter<any>();
  @Output() buttonEdit = new EventEmitter<any>();
  selectedRow : any;
  loading = true;
  constructor(
    private toastr: ToastrService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.loading = false;
  }

  ngOnChanges() {
    if (this.data != undefined) {
      this.data = new MatTableDataSource<any>(this.data);
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    }
  }

  edit() {
    if (this.selectedRow == null || this.selectedRow == undefined) {
      this.notificationService.addAlert({
        icon: 'all_inbox',
        title: 'Error',
        message: this.translateService.data.TABLE.SELECT_ROW,
        shown: true
      });

      return;
    }

    this.buttonEdit.emit(this.selectedRow);
  }

  add(){
    this.buttonAdd.emit();
  }

  highlight(row : any){
    if(row == undefined || row == null){
      console.log('in here');
      this.toastr.error('GENERAL.SELECTROW');
    }else{
      this.selectedRow=row;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.data.filter = filterValue;
  }
}
