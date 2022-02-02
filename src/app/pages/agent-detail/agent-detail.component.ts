import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
    selector: 'app-agent-detail',
    templateUrl: './agent-detail.component.html',
    styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit, OnDestroy {
    public agent: any;
    public agentId: string | null;
    public isAdmin: boolean;
    public availableForms: Array<any>;

    constructor(private _router: Router, private _route: ActivatedRoute) {
        this.isAdmin = !!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
        this.agent = GlobalConstants.selectedAgent;
        this.agentId = this._route.snapshot.paramMap.get('agentId');
        if (!this.agent) {
            this.goBack();
            return;
        }

        const attributes = !!this.agent.Attributes ? this.agent.Attributes : this.agent.attributes;
        if (Array.isArray(attributes)) {
            attributes.forEach(element => {
                if (element.Name === 'email') {
                    this.agent.email = element.Value;
                } else if (element.Name === 'given_name') {
                    this.agent.name = element.Value;
                }
            });
        } else if (!!attributes && typeof attributes === 'object') {
            this.agent.email = attributes?.email;
            this.agent.name = attributes?.given_name;
        }

        this.setAvailableForms();
    }

    ngOnInit() { }

    ngOnDestroy(): void {

    }

    setAvailableForms() {
        this.availableForms = [
            { name: 'Aktivity', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png', form_url: `/activity/${this.agentId}` },
            { name: 'Intervencie', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png', form_url: `/interventions/${this.agentId}` },
            { name: 'Zdravotná Osveta', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png', form_url: `/enlightenments/${this.agentId}` },
        ]
    }

    goBack() {
        this._router.navigate(['/agents']);
    }
}
