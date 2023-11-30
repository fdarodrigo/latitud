import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss'],
  standalone: true,
  imports: [MatDialogModule],
})
export class Dialog1Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {}

    ngOnInit() {
    console.log(this.data);
  }

}
