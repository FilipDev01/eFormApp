import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
    selector: 'app-agent-detail',
    templateUrl: './agent-detail.component.html',
    styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit, OnDestroy {
    public agent: any;
    public availableForms: Array<any>;

    constructor(private _router: Router) {
        this.agent = GlobalConstants.selectedAgent;
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
            { name: 'Intervencie', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png', form_url: `/interventions/${this.agent.Username}` },
            { name: 'Form1', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png' },
            { name: 'Form2', img_url: '../../../../assets/img/form/healthy-regions/picture_3.png' },
        ]
    }

    goBack() {
        this._router.navigate(['/agents']);
    }
}
