import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../common/global-constants';
import { AgentsService } from './agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
  providers: [AgentsService]
})
export class AgentsComponent implements OnInit {
  public processing: boolean;
  public agents: Array<any>;

  constructor(
    private _service: AgentsService,
    private _router: Router
  ) { }

  async ngOnInit() {
    GlobalConstants.selectedAgent = null;

    this.processing = true;
    this.agents = await this._service.getAgentsAsync();
    this.processing = false;
  }

  goToAgentDetails(agent: any) {
    GlobalConstants.selectedAgent = agent;
    this._router.navigate(['/agent', agent.user_id]);
  }
}
