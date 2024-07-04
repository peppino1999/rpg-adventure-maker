import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TableConfig } from './table.model';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements AfterViewInit {
  @Input() data!: any[] | undefined
  @Input() columns!: TableConfig[]
  dataSource!: MatTableDataSource<any>
  displayedColumns!: string[]
  pageSizeOptions = [5,10, 20, 25]
  @Output() onAction: EventEmitter<any> = new EventEmitter()

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator
  
  ngAfterViewInit(){
    this.displayedColumns = this.columns.map(i => i.name)
    this.dataSource = new MatTableDataSource(this.data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
    console.log(this.sort, this.paginator)
  }


  sortChange(sortState:Sort){
    // evento scatenato ad ogni cambio di sort
    

  }

  action(data: any){
    this.onAction.emit(data)
  }
}
