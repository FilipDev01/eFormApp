import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { DateRange, MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { CalendarHeaderComponent } from './header/header.component';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public calendarHeaderComponent = CalendarHeaderComponent;
  public selectedDate: Date | DateRange<Date> | null;
  public minDate: Date | null = null;
  public maxDate: Date | null = null;

  private _datesToHighlight: Array<string>;

  @Input() data: any;
  @Input() reportDate: any;

  @Output() dateSelected: EventEmitter<Date | DateRange<Date> | null> = new EventEmitter();
  @Output() monthChanged: EventEmitter<any> = new EventEmitter();

  @ViewChild('calendar', { static: true }) calendar: MatCalendar<moment.Moment>;

  constructor(private _elementRef: ElementRef) {
    this._datesToHighlight = new Array<string>();
  }

  ngOnInit(): void {
    let date = !!this.reportDate ? this.reportDate : new Date();

    this.setMinDate(date);
    this.setMaxDate(date);
  }

  setMinDate(date: Date) {
    this.minDate = new Date(date.getFullYear(), date.getMonth(), 1);
  }

  setMaxDate(date: Date) {
    this.maxDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  dateChanged(event: any) {
    this.selectedDate = event;
    // this.dateSelected.emit(this.selectedDate);
  }

  onMonthChanged(event: any) {
    this.monthChanged.emit(new Date(event));
  }

  onClick(event: any) {
    if (this.selectedDate) {
      this.dateSelected.emit(this.selectedDate);
      this.selectedDate = null;
    }
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {

      if (!!this.data && Array.isArray(this.data)) {
        this.data.forEach((data: any) => {
          this._datesToHighlight.push(data.date);
        });

        const formFilled = this._datesToHighlight
          .map(strDate => new Date(strDate))
          .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());

        let dateClass = ''
        if (formFilled) {
          dateClass = 'form-filled'
        } else if (date <= new Date()) {
          dateClass = 'form-non-filled';
        }

        return dateClass;
      }

      return '';
    };
  }
}
