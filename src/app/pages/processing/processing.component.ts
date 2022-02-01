import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';


@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
})
export class ProcessingComponent implements OnInit {
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.redirectToAgentDetails();
  }

  redirectToAgentDetails() {
    if (GlobalConstants.currentUserGroups.includes('admin')) {
      this._router.navigateByUrl(`/agents`);
    } else {
      this._router.navigateByUrl(`/agent/${GlobalConstants.selectedAgent.username}`);
    }
  };

}
