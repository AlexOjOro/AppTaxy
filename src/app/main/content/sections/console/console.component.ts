import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransactionResult } from '../../../../core/services/interfaces/transaction-result';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '../../../../core/services/translate-service';
import { IConsole } from '../Interfaces/IConsole';
import { ConsoleService } from '../services/console-service';
import { ConsoleDetail } from './console-detail/console-detail';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../../core/services/notification/notification.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  listData: IConsole[];
  loading = false;
  station: string = 'CONSOLE';
  columns: Array<any> = ['id', 'name'];
  displayedColumns: Array<string> = this.columns.map(c => c.columnDef);


  constructor(
    private consoleService: ConsoleService,
    notificationService: NotificationService,
    public dialog: MatDialog
  ) {
   
  }

  ngOnInit() {
    this.getConsoles();
  }

  getConsoles() {
    this.loading = true;
    this.consoleService.getList().subscribe(
      (result: TransactionResult<IConsole[]>) => {
        this.loading = false;
        if (result.success) {
          this.listData = result.data;
        }
      },
      (error: any) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  addConsole() {
    const dialogRef = this.dialog.open(ConsoleDetail, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getConsoles();
    });
  }

  editConsole(item: IConsole) {
    const dialogRef = this.dialog.open(ConsoleDetail, {
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getConsoles();
    });
  }
}
