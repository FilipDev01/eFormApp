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

    public agentStatuses: Array<any>;
    public agentActiveStatus: any;
    public availableForms: Array<any>;

    constructor(
        private _service: AgentsService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this.agentStatuses = [
            { value: 'active', label: 'V Práci', class: 'text-success' },
            { value: 'break', label: 'Prestávka', class: 'text-primary' },
            { value: 'inactive', label: 'Neaktívny', class: 'text-danger' },
            { value: 'holidays', label: 'Dovolenka', class: 'text-primary' },
            { value: 'holidays_hd', label: 'Dovolenka poldeň', class: 'text-primary' },
            { value: 'ill', label: 'PN', class: 'text-primary' },
            { value: 'parenting', label: 'OČR', class: 'text-primary' },
            { value: 'doctor', label: 'Lekár', class: 'text-primary' },
            { value: 'doctor_hd', label: 'Lekár poldeň', class: 'text-primary' },
            //{ value: 'other', label: 'Iné' },
        ];
    }

    async ngOnInit() {
        this.agentId = this._route.snapshot.paramMap.get('agentId');
        this.agent = await this._service.getAgentAsync(this.agentId);
        if (this.agent?.status && this.agent.status.value) {
            this.agentActiveStatus = this.agentStatuses.find((x: any) => x.value === this.agent.status.value);
        }

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

    async updateStatus(event: any) {
        const status = await this._service.createAgentActivityAsync(this.agentId, this.agentActiveStatus);
        if (!!status) {
            this.agentActiveStatus = this.agentStatuses.find((x: any) => x.value === status);
        }
    }

    canDeactivate() {
        const date = new Date();
        return date.getHours() < 16;
    }
}
