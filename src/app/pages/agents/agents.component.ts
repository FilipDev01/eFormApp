import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../common/global-constants';

import { AdminQueriesService } from '../../services/admin-queries/admin-queries.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  public processing: boolean;
  public agents: Array<any>;

  constructor(private _admiQueriesService: AdminQueriesService, private _router: Router) { }

  ngOnInit() {
    GlobalConstants.selectedAgent = null;
    this.getAgents();
  }

  async getAgents(refresh?: boolean) {
    try {
      this.processing = true;
      this.agents = GlobalConstants.agents;

      if (!!refresh || !this.agents) {
        console.log("refresh");
        const res: any = await this._admiQueriesService.getUsersAsync('agent', 20);
        if (!!res) {
          this.agents = GlobalConstants.agents = res.Users;
        }
      }

      this.processing = false;
    } catch (err: any) {
      console.error("eForm", err);
      this.processing = false;
    }
  }

  goToAgentDetails(agent: any) {
    GlobalConstants.selectedAgent = agent;
    this._router.navigate(['/agent', agent.Username]);
  }
}
