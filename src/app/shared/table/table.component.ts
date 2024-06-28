import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableConfig } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<T> implements AfterViewInit {
  @Input() data!: any[] | null
  @Input() columns!: TableConfig[]

  displayedColumns!: string[]
  @Output() onAction: EventEmitter<any> = new EventEmitter()


  ngAfterViewInit(){
    this.displayedColumns = this.columns.map(i => i.name)
    console.log(this.displayedColumns)
  }

  action(data: any){
    this.onAction.emit(data)
  }
}
