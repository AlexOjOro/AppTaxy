import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../../../../../core/services/notification/notification.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { TransactionResult } from '../../../../../core/services/interfaces/transaction-result';
import { IConsole } from '../../Interfaces/IConsole';
import { ConsoleService } from '../../services/console-service';
import { TranslateService } from '../../../../../core/services/translate-service';

@Component({
  selector: 'console-detail',
  templateUrl: 'console-detail.html',
})
export class ConsoleDetail {
  formGroup: FormGroup;
  loading = false;
  list: any[] = [
    { Id: 1, Name: "Nombre 1" },
    { Id: 2, Name: "Nombre 2" },
    { Id: 3, Name: "Nombre 3" }
  ];


  constructor(
    private dialogRef: MatDialogRef<ConsoleDetail>,
    @Inject(MAT_DIALOG_DATA) public data: IConsole,
    private notificationService: NotificationService,
    private translateService: TranslateService,
    private consoleService: ConsoleService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      id: [data.id == null ? 0 : data.id],
      name: [data.name, Validators.required],
    });
  }
  //button save for add/edit
  save() {
    if (this.formGroup.valid) {
      this.loading = true;
      if (this.formGroup.controls.id.value == 0) {
        this.consoleService.createConsole(this.formGroup.value).subscribe(
          (result: TransactionResult<boolean>) => {
            this.loading = false;
            console.log(result);
            if (result.success) { this.alert(); this.dialogRef.close(true); }
          },
          error => { this.loading = false; console.log(error); }
        );
      }
      else {
        this.consoleService.updateConsole(this.formGroup.value).subscribe(
          (result: TransactionResult<boolean>) => {
            this.loading = false;
            if (result.data) { this.alert(); this.dialogRef.close(true); }
          },
          error => { this.loading = false; console.log(error); }
        );
      }
    }
  }


  close() {
    this.dialogRef.close(false);
  }

  alert() {
    this.notificationService.addAlert({
      icon: 'all_inbox',
      title: 'Success',
      message: 'Complete',
      shown: true
    });

  }
}
