import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { GlobalConstants } from '../../common/global-constants';
import { ActivityTableComponent } from './activity-table/activity-table.component';
import { MatTable } from '@angular/material/table';

@Component({
    selector: 'app-activity-form',
    templateUrl: './activity-form.component.html',
    styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {
    public processing: boolean;

    public dateToday: Date;

    public agentIsAdmin: boolean;
    public agentId: string | null;
    public agentName: string;

    public displayedColumns: string[] = ['status', 'time', 'activity', 'action'];
    public availableTimes: Array<string>;
    public activities: Array<any>;

    @ViewChild(MatTable) table: MatTable<any>;

    constructor(
        public dialog: MatDialog,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.dateToday = new Date();

        this.agentIsAdmin = !!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
        this.agentId = this._route.snapshot.paramMap.get('agentId');

        this.activities = new Array<any>();
        this.availableTimes = ["08:00", "09:00", "10:00", "11:00", "12:00"];
    }

    ngOnInit(): void { }

    goBackToAgent() {
        this._router.navigate([`/agent/${this.agentId}`])
    }

    addData() {
        this.activities = !this.activities ? new Array<any>() : this.activities;
        this.activities.push({ time: this.availableTimes[0] });
        this.table.renderRows();
    }

    removeRow(element: any) {
        console.log(element);
    }

    addActivityRow() {
        this.activities = !this.activities ? new Array<any>() : this.activities;
        this.activities.push({ time: this.availableTimes[0] });
    }

    generatePdfFileAsync() {

    }
}