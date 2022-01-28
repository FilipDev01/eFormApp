import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private _service: DashboardService,
    private _router: Router
  ) {
  }

  ngOnInit() {

  }

  redirectToFrom(type: string) {
    this._router.navigateByUrl(`/${type}`);
  };

}
