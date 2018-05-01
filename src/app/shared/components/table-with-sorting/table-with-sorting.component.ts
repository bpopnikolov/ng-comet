import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
// import { DataSource } from '@angular/cdk/collections';
import { JobadsService } from '../../services/jobads';
import { JobAd } from '../../models';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';


@Component({
    selector: 'app-table-with-sorting',
    templateUrl: './table-with-sorting.component.html',
    styleUrls: ['./table-with-sorting.component.scss']
})
export class TableWithSortingComponent implements OnInit {

    @Input() data;
    @Input() displayedColumns = [];
    @Input() buttonColumns = [];
    @Input() buttonDef = [];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Output() actionButtonClicked = new EventEmitter();
    dataSource: MatTableDataSource<any>
    allColumns = [];

    constructor() {

    }

    ngOnInit() {
        this.allColumns = [...this.displayedColumns, ...this.buttonColumns];
        this.dataSource = this.data;

    }



    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    onActionButtonClick(action, id) {
        this.actionButtonClicked.emit({ action, id });
  }

}


