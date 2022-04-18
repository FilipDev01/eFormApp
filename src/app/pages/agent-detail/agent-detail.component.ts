import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentsService } from '../agents/agents.service';

@Component({
    selector: 'app-agent-detail',
    templateUrl: './agent-detail.component.html',
    styleUrls: ['./agent-detail.component.css'],
    providers: [AgentsService]
})
export class AgentDetailComponent implements OnInit {
    public agent: any;
    public agentId: string | null;
    public isAdmin: boolean;


    public agentStatus: string;
    public availableForms: Array<any>;

    constructor(
        private _service: AgentsService,
        private _router: Router,
        private _route: ActivatedRoute
    ) { }

    async ngOnInit() {
        this.agentId = this._route.snapshot.paramMap.get('agentId');
        this.agent = await this._service.getAgentAsync(this.agentId);
        this.setAvailableForms();
    }

    setAvailableForms() {
        this.availableForms = [
            { name: 'Intervencie', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png', form_url: `/interventions/${this.agentId}` },
            { name: 'Zdravotná Osveta', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png', form_url: `/enlightenments/${this.agentId}` },
            { name: 'Monitoring Covid', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png', form_url: `/covidmonitoring/${this.agentId}` },
        ]
    }

    goBack() {
        this._router.navigate(['/agents']);
    }

    updateStatus(event: any) {
        this._service.createAgentActivityAsync(this.agentId, this.agent.status);
    }

    canDeactivate() {
        const date = new Date();
        return date.getHours() < 16;
    }
}
