import { Injectable } from '@angular/core';
import { APIService, CreateInterventionsInput, ListInterventionsQuery } from '../graphql/Interventions.service';

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

    async getInterventionsAsync() {
        const intervetions: ListInterventionsQuery = await this._interventionsService.ListInterventions();
        return intervetions.items;
        
        if (!!intervetions && !!intervetions.items && intervetions.items.length > 0) {
            return new InterventionFormModel(intervetions.items);
        } else {
            return null
        }

    }

    async createIntervention() {
        const request: CreateInterventionsInput = {
            user_id: '123',
            date: '1233',
            created_at: '123',
            a1: 1,
            a2: 1,
            a3: 1,
            a4: 1,
            b1: 1,
            b2: 1,
            b3: 1,
            b4: 1,
            c1: 1,
            c2: 1,
            c3: 1,
            c4: 1,
            c5: 1,
            d1: 1,
            d2: 1,
            d3: 1,
            d4: 1,
            d5: 1,
            d6: 1,
            d7: 1,
            d8: 1,
            e1: 1,
        }

        const response = await this._interventionsService.CreateInterventions(request);
        console.log(response);
    }

}