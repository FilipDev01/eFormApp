import { Injectable } from '@angular/core';
import { APIService, CreateInterventionsInput, ListInterventionsQuery, ModelInterventionsFilterInput, ModelStringInput } from '../graphql/Interventions.service';
import { Auth } from 'aws-amplify'
import { GlobalConstants } from 'src/app/common/global-constants';

@Injectable({ providedIn: 'root', })

export class InterventionFormModel {
    tableRows: any[]

    constructor(interventions: Array<any>) {
        this.setSections(interventions);
    }

    setSections(interventions: Array<any>) {
        this.tableRows = new Array<any>();
        interventions.forEach((intervention: any) => {
            const row: any = [
                {
                    name: "A: Podpora preventívnych zdravotných programov",
                    columns: [
                        { db_name: 'a1', table_name: 'A1: Preventívna prehliadka ', value: intervention['a1'] },
                        { db_name: 'a2', table_name: 'A2: Očkovanie', value: intervention['a2'] },
                        { db_name: 'a3', table_name: 'A3: Materská poradnňa', value: intervention['a3'] },
                        { db_name: 'a4', table_name: 'A4: OčkovanieCOVID-19', value: intervention['a4'] }
                    ]
                },
                {
                    name: "B: Spolupráca s lekármi",
                    columns: [
                        { db_name: 'b1', table_name: '', value: '' },
                        { db_name: 'b2', table_name: '', value: '' },
                        { db_name: 'b3', table_name: '', value: '' },
                        { db_name: 'b4', table_name: '', value: '' }
                    ]
                },
                {
                    name: "C: Spolupráca",
                    columns: [
                        { db_name: 'c1', table_name: '', value: '' },
                        { db_name: 'c2', table_name: '', value: '' },
                        { db_name: 'c3', table_name: '', value: '' },
                        { db_name: 'c4', table_name: '', value: '' },
                        { db_name: 'c5', table_name: '', value: '' }
                    ]
                },
                {
                    name: "D: Priama asistencia klientom",
                    columns: [
                        { db_name: 'd1', table_name: '', value: '' },
                        { db_name: 'd2', table_name: '', value: '' },
                        { db_name: 'd3', table_name: '', value: '' },
                        { db_name: 'd4', table_name: '', value: '' },
                        { db_name: 'd5', table_name: '', value: '' },
                        { db_name: 'd6', table_name: '', value: '' },
                        { db_name: 'd7', table_name: '', value: '' },
                        { db_name: 'd8', table_name: '', value: '' }
                    ]
                },
                {
                    name: "E: Ďalšie aktivity",
                    columns: [
                        { db_name: 'e1', table_name: '', value: '' },
                    ]
                }
            ];

            this.tableRows.push(row);
        });

    }
}


export class InterventionsFormService {
    private _interventionsService: APIService;

    constructor() {
        this._interventionsService = new APIService();
    }

    async getInterventionsAsync(userId: string | null) {
        if (!userId) {
            return null;
        }

        const uId: ModelStringInput = { eq: userId }
        const filter: ModelInterventionsFilterInput = { user_id: uId };

        // const intervetions: ListInterventionsQuery = await this._interventionsService.ListInterventions(filter);
        // return intervetions.items;

        const dummyData: any = { "data": { "listInterventions": { "__typename": "ModelInterventionsConnection", "items": [{ "__typename": "Interventions", "id": "227e2322-519a-4ba6-98ae-e06463551e14", "user_id": "6ef3c7a1-66e9-403d-aeb0-e90ab17593ff", "date": "2022-01-01T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "c5": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "d5": 0, "d6": 0, "d7": 0, "d8": 0, "e1": 0, "createdAt": "2022-01-31T18:50:38.015Z", "updatedAt": "2022-01-31T18:50:38.015Z" }], "nextToken": null } } };
        return Promise.resolve(dummyData.data.listInterventions.items);
    }

    async createInterventionAsync(formData: any, userId: string | null) {
        const data: any = formData?.data;
        if (!data) {
            return;
        }

        delete data.form_data;

        const request: CreateInterventionsInput = data;
        if (!!request) {
            request.user_id = userId;
            request.date = !!formData.data.date ? formData.data.date.toISOString() : null;

            console.log(request);

            if (!!request.date) {
                const response = await this._interventionsService.CreateInterventions(request);
                console.log(response);
            } else {
                // TODO: error message
            }
        }

    }

}