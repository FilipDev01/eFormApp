import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent implements OnInit {

  public activities: Array<any>;
  public availableTimes: Array<string>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<ActivityTableComponent>
  ) {
    this.availableTimes = ["08:00", "09:00", "10:00", "11:00", "12:00"];
  }

  ngOnInit(): void {

  }

  dialogClose() {
    this.dialogRef.close();
  }

  addActivityRow() {
    this.activities = !this.activities ? new Array<any>() : this.activities;
    this.activities.push({})
  }
}
