import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CalendarComponent } from './calendar.component'
import { CalendarHeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CalendarComponent, CalendarHeaderComponent],
  imports: [
    CommonModule,
    MatDatepickerModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
