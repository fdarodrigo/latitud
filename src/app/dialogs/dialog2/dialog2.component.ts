import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule]
})
export class Dialog2Component {
  constructor(public dialogRef: MatDialogRef<Dialog2Component>) {}
  
}
