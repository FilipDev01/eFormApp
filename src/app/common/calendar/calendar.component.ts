import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { DateRange, MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public selectedDate: Date | DateRange<Date> | null;
  public minDate: Date | null = null;
  public maxDate: Date | null = null;

  private _datesToHighlight: Array<string>;

  @Input() data: any;
  @Output() dateSelected: EventEmitter<Date | DateRange<Date> | null> = new EventEmitter();

  @ViewChild('calendar', { static: true }) calendar: MatCalendar<moment.Moment>;

  constructor(private _renderer: Renderer2) {
    this._datesToHighlight = new Array<string>();
  }

  ngOnInit(): void {
    this.setMinDate();
    this.setMaxDate();
  }

  ngAfterViewInit() { }

  setMinDate() {
    const date = new Date();
    this.minDate = new Date(date.getFullYear(), date.getMonth(), 1);
  }

  setMaxDate() {
    this.maxDate = new Date();
  }

  dateChanged(event: any) {
    // this.calendar.activeDate = this.selectedDate;
    this.selectedDate = event;
    this.dateSelected.emit(this.selectedDate);
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


  getDaysInCurrentMonth() {
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

}
