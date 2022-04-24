import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CognitoUser } from '@aws-amplify/auth';

import { APIService, ListAgentsQuery, ModelAgentFilterInput } from '../../services/graphql/graphql.service';
import { ActivitiesService } from '../../services/forms/activity.service'
import { GlobalConstants } from '../../common/global-constants';
import { AuthService } from '../../services/auth/auth.guard.service';
import { UpdateStatusModal } from '../agent-detail/modal/update-status.modal';

@Injectable({ providedIn: 'root', })

export class AgentsService {
    private _graphqlService: APIService;

    constructor(
        public dialog: MatDialog,
        private _router: Router,
        private _activityService: ActivitiesService,
        private _authService: AuthService,
    ) {
        this._graphqlService = new APIService();
    }

    public async getAgentAsync(agentId: string | null) {
        let agent = GlobalConstants.selectedAgent;
        if (!agent && !agentId) {
            this._router.navigate(['/agents']);
            return null;
        }

        if ((!agent || this._isCognitoUserObj(agent)) && agentId) {
            const filter: ModelAgentFilterInput = { user_id: { eq: agentId } };
            const agents = await this._graphqlService.ListAgents(filter);
            if (!!agents && agents.items && agents.items.length > 0) {
                GlobalConstants.selectedAgent = agent = agents.items[0];
            } else {
                this._authService.logout();
            }
        }

        const dateToday = new Date();
        dateToday.setHours(0, 0, 0, 0);

        const activities = await this._activityService.getAgentActivitiesByDateAsync(agent.user_id, dateToday);
        agent = await this.setAgentDetailsAsync(agent, activities);


        agent.is_admin = !!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
        return agent;
    }

    public async getAgentsAsync() {
        try {
            let agents = GlobalConstants.agents;
            if (!agents) {
                const res: ListAgentsQuery = await this._graphqlService.ListAgents();
                // console.log("Dummy Admin QueryUsers");
                // const res = { "Users": [{ "Username": "19ff2cf4-2299-40ad-8f03-bfd423e995c4", "Attributes": [{ "Name": "sub", "Value": "19ff2cf4-2299-40ad-8f03-bfd423e995c4" }, { "Name": "email_verified", "Value": "true" }, { "Name": "given_name", "Value": "eform03025" }, { "Name": "email", "Value": "eform03025@mailinator.com" }], "UserCreateDate": "2022-02-03T17:56:53.180Z", "UserLastModifiedDate": "2022-02-03T18:01:01.921Z", "Enabled": true, "UserStatus": "CONFIRMED" }, { "Username": "1af461ed-6079-446c-ba3a-eb883da365b8", "Attributes": [{ "Name": "sub", "Value": "1af461ed-6079-446c-ba3a-eb883da365b8" }, { "Name": "email_verified", "Value": "true" }, { "Name": "phone_number_verified", "Value": "false" }, { "Name": "email", "Value": "fpdev09@gmail.com" }], "UserCreateDate": "2022-01-25T11:03:13.639Z", "UserLastModifiedDate": "2022-02-03T22:10:53.642Z", "Enabled": true, "UserStatus": "CONFIRMED" }, { "Username": "101c9ff8-75b5-44e5-9b40-c36a245b4221", "Attributes": [{ "Name": "sub", "Value": "101c9ff8-75b5-44e5-9b40-c36a245b4221" }, { "Name": "email_verified", "Value": "true" }, { "Name": "phone_number_verified", "Value": "false" }, { "Name": "email", "Value": "kristianberecz@gmail.com" }], "UserCreateDate": "2022-01-27T11:55:04.062Z", "UserLastModifiedDate": "2022-02-02T15:48:24.512Z", "Enabled": true, "UserStatus": "CONFIRMED" }, { "Username": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "Attributes": [{ "Name": "sub", "Value": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a" }, { "Name": "email_verified", "Value": "true" }, { "Name": "phone_number_verified", "Value": "false" }, { "Name": "email", "Value": "filip.ludma@gmail.com" }], "UserCreateDate": "2022-01-26T13:51:00.635Z", "UserLastModifiedDate": "2022-02-04T12:43:18.052Z", "Enabled": true, "UserStatus": "CONFIRMED" }, { "Username": "0e23d2dd-27e1-489b-b027-c1986a88a138", "Attributes": [{ "Name": "sub", "Value": "0e23d2dd-27e1-489b-b027-c1986a88a138" }, { "Name": "email_verified", "Value": "true" }, { "Name": "given_name", "Value": "Karin Vanatkova" }, { "Name": "email", "Value": "eformvanatkova@mailinator.com" }], "UserCreateDate": "2022-02-02T11:37:28.630Z", "UserLastModifiedDate": "2022-02-02T12:51:03.335Z", "Enabled": true, "UserStatus": "CONFIRMED" }] };
                if (!!res && !!res.items && res.items.length > 0) {
                    const data = res.items;
                    const dateToday = new Date();
                    dateToday.setHours(0, 0, 0, 0);
                    const activities = await this._activityService.getActivitiesAsync(dateToday);

                    agents = this.setAgentsDetailsAsync(data, activities);
                    GlobalConstants.agents = agents;
                }
            }

            return agents;
        } catch (err: any) {
            console.error(err);
            return new Array<any>();
        }
    }

    public async setAgentDetailsAsync(agent: any, activities?: any) {
        // Set Agent Status
        agent.status = { type: 'action', value: 'inactive' };
        if (!!activities && Array.isArray(activities)) {
            let acts = activities.filter((x: any) => x.user_id === agent.user_id);
            if (!!acts && acts.length > 0) {
                acts = acts.sort((x, y) => +(new Date(x.date)) - +(new Date(y.date)));
                agent.status.value = acts[(acts.length - 1)].activity;
            }

            if (!!agent?.status?.value) {
                agent.status_obj = this._agentStatuses.find((x: any) => x.value === agent.status.value);
            }
        }
        this._setAgentOrder(agent);
        return agent;
    }

    public async createAgentActivityAsync(agentId?: string | null, status?: any) {
        try {
            if (!agentId || !status) {
                return null;
            }

            const wizarConfig: any = { panelClass: 'my-dialog-reports', disableClose: true, data: { status: status } };
            const dialogRef = this.dialog.open(UpdateStatusModal, wizarConfig);
            const dialogRes = await dialogRef.afterClosed().toPromise()

            if (!!dialogRes && !!dialogRes.status && status && dialogRes.status !== status.value) {
                const res = await this._activityService.createActvityAsync(agentId, dialogRes.status);
                if (!!res) {            
                    GlobalConstants.selectedAgent.status = dialogRes.status;
                }
            }

            return dialogRes.status;
        } catch (err: any) {
            console.error("Save Activity");
            return null;
        }
    }

    private async setAgentsDetailsAsync(data: Array<any>, activities?: any): Promise<any> {
        if (!data || data.length === 0) {
            return null;
        }

        const agents = new Array<any>();
        data.forEach(async (agent: any) => {
            agents.push(await this.setAgentDetailsAsync(agent, activities));
        });

        return agents;
    }

    private _isCognitoUserObj(data: CognitoUser): data is CognitoUser {
        return (<CognitoUser>data).getUserData !== undefined;
    }

    private _setAgentOrder(agent: any) {
        const order = [
            { name: 'Balážová', order: 1 },
            { name: 'Danielová', order: 2 },
            { name: 'Danihelová Nadežda', order: 3 },
            { name: 'Pútiková', order: 4 },
            { name: 'Olah', order: 5 },
            { name: 'Polakovičová', order: 6 },
            { name: 'Salajová', order: 7 },
            { name: 'Suchánková', order: 8 },
            { name: 'Slezáková', order: 9 },
            { name: 'Hrúzová', order: 10 },
            { name: 'Biháriová', order: 11 },
            { name: 'Danihelová', order: 12 },
            { name: 'Kočnárová', order: 13 },
            { name: 'Zemanová', order: 14 },
            { name: 'Malíková', order: 15 },
            { name: 'Test', order: 16 },
        ];

        const o = order.find((a: any) => agent.name.includes(a.name));
        if (!!o) {
            agent.order = o.order;
        }
    }

    private _agentStatuses = [
        { value: 'active', label: 'V Práci', class: 'bg-success' },
        { value: 'break', label: 'Prestávka', class: 'bg-primary' },
        { value: 'inactive', label: 'Neaktívny', class: 'bg-danger' },
        { value: 'holidays', label: 'Dovolenka', class: 'bg-primary' },
        { value: 'holidays_hd', label: 'Dovolenka poldeň', class: 'bg-primary' },
        { value: 'ill', label: 'PN', class: 'bg-primary' },
        { value: 'parenting', label: 'OČR', class: 'bg-primary' },
        { value: 'doctor', label: 'Lekár', class: 'bg-primary' },
        { value: 'doctor_hd', label: 'Lekár poldeň', class: 'bg-primary' },
        //{ value: 'other', label: 'Iné' },
    ];
}