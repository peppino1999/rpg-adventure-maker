import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableConfig } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<T> {
  @Input() data!: any[] | null
  @Input() columns!: TableConfig[]

  @Output() onAction: EventEmitter<any> = new EventEmitter()


  action(data: any){
    this.onAction.emit(data)
  }
}
