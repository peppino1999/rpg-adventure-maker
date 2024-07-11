
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type ConfirmDialogData = {
  title: string,
  content?: string
}


@Component({
  selector: 'app-confirm',
  template: `
    <h2 mat-dialog-title>{{data.title}}</h2>
    <mat-dialog-content>
     {{data.content}}
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="confirm()">Procedi</button>
      <button mat-button color="danger" (click)="decline()">Annulla</button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent {

  dialogRef = inject(MatDialogRef)
  data = inject<ConfirmDialogData>(MAT_DIALOG_DATA)

  constructor(
  ){}

  confirm(){
    this.dialogRef.close(true)
  }
  decline(){
    this.dialogRef.close(false)
  }
}