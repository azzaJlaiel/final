import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationdialogComponent } from '../confirmationdialog/confirmationdialog.component';

@Component({
  selector: 'app-confirmationdialog2',
  templateUrl: './confirmationdialog2.component.html',
  styleUrls: ['./confirmationdialog2.component.css']
})
export class Confirmationdialog2Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }
  

    onNoClick(): void {
      this.dialogRef.close();
    }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
}
