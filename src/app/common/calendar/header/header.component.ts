import { ChangeDetectionStrategy, Component, Inject, ChangeDetectorRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-calendar-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarHeaderComponent<D> implements OnDestroy {
    public nextMonthDisabled: boolean;
    private _destroyed = new Subject<void>();

    constructor(private _calendar: MatCalendar<D>,
        private _dateAdapter: DateAdapter<D>,
        @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
        cdr: ChangeDetectorRef
    ) {
        _calendar.stateChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe(() => cdr.markForCheck());

        this._handleMonthChangeAction('init');
    }

    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }

    get periodLabel() {
        return this._dateAdapter
            .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
            .toLocaleUpperCase();
    }


    previousClicked(mode: 'month' | 'year') {
        this.nextMonthDisabled = false;

        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);

        this._handleMonthChangeAction('previous');
    }

    nextClicked(mode: 'month' | 'year') {
        this._calendar.maxDate = this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1);
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);

        this._handleMonthChangeAction('next');
    }

    private _handleMonthChangeAction(type: string) {
        const curMonth = new Date().getMonth();
        const calendarDate: any = this._calendar.activeDate;
        const calendarMonth = calendarDate.getMonth();

        this.nextMonthDisabled = curMonth === calendarMonth;
        if (type !== "init") {
            this._calendar.monthSelected.emit(this._calendar.activeDate);
        }
    }
}