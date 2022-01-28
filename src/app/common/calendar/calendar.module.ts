import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CalendarComponent } from './calendar.component'

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    MatDatepickerModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
