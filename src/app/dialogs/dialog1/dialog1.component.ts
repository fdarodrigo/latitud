import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss'],
  standalone: true,
  imports: [MatDialogModule],
})
export class Dialog1Component {
  constructor(public dialogRef: MatDialogRef<Dialog1Component>) {}
}
