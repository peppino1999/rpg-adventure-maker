import { Component, Inject, inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {Clipboard} from '@angular/cdk/clipboard';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-partyId-dialog',
    template: `
      <h1 mat-dialog-title>{{ data.title }}</h1>
      <div mat-dialog-content>
        <p>{{ data.content }}</p>
        <code>{{data.partyId}}</code> 
        <button mat-mini-fab (click)="copyTioClipboard(data.partyId)">
            <mat-icon>content_copy</mat-icon>
        </button>
      </div>
      <div mat-dialog-actions>
        <button mat-flat-button [mat-dialog-close]="true">Ok</button>
      </div>
    `,
  })
  export class PartyIdDialogComponent {
    clipBoard = inject(Clipboard);
    snackBar = inject(MatSnackBar);
    data = inject(MAT_DIALOG_DATA);
    constructor(
    ) {}
    
    copyTioClipboard(partyId: string){
        this.clipBoard.copy(partyId);
        this.snackBar.open('Party ID copiato', 'Chiudi', {
          duration: 2000,
        });
    }
  }