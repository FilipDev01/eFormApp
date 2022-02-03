import { Injectable } from '@angular/core';
import { APIService, CreateInterventionsInput, ListInterventionsQuery, ModelInterventionsFilterInput, ModelStringInput } from '../graphql/graphql.service';

@Injectable({ providedIn: 'root', })

export class InterventionsFormService {
    private _interventionsService: APIService;

    constructor() {
        this._interventionsService = new APIService();
    }

    async getInterventionsAsync(userId: string | null) {
        if (!userId) { return null; }

        const uId: ModelStringInput = { eq: userId }
        const filter: ModelInterventionsFilterInput = { user_id: uId };

        const intervetions: ListInterventionsQuery = await this._interventionsService.ListInterventions(filter);
        return intervetions.items;

        // const dummyData: any = {"data":{"listInterventions":{"__typename":"ModelInterventionsConnection","items":[{"__typename":"Interventions","id":"45a31ed5-03d6-4608-af67-7a23172099e1","user_id":"1af461ed-6079-446c-ba3a-eb883da365b8","date":"2022-02-03T00:00:00.000Z","a1":0,"a2":0,"a3":0,"a4":0,"b1":0,"b2":0,"b3":0,"b4":0,"c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"d1":0,"d2":0,"d3":0,"d4":0,"d5":0,"d6":0,"d7":0,"d8":0,"e1":0,"createdAt":"2022-02-03T19:32:20.000Z","updatedAt":"2022-02-03T19:32:20.000Z"},{"__typename":"Interventions","id":"31ffc614-769e-4bdb-822a-ecd7748d27c7","user_id":"1af461ed-6079-446c-ba3a-eb883da365b8","date":"2022-02-01T00:00:00.000Z","a1":1,"a2":2,"a3":3,"a4":4,"b1":1,"b2":2,"b3":3,"b4":4,"c1":44,"c2":1,"c3":2,"c4":3,"c5":4,"d1":1,"d2":2,"d3":0,"d4":0,"d5":0,"d6":0,"d7":0,"d8":0,"e1":5,"createdAt":"2022-02-03T19:28:24.718Z","updatedAt":"2022-02-03T19:28:24.718Z"},{"__typename":"Interventions","id":"2cf085dc-134d-424a-b266-b1965c8ae8b2","user_id":"1af461ed-6079-446c-ba3a-eb883da365b8","date":"2022-02-02T00:00:00.000Z","a1":0,"a2":0,"a3":0,"a4":0,"b1":0,"b2":0,"b3":0,"b4":0,"c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"d1":0,"d2":0,"d3":0,"d4":0,"d5":0,"d6":0,"d7":0,"d8":0,"e1":0,"createdAt":"2022-02-03T19:29:34.722Z","updatedAt":"2022-02-03T19:29:34.722Z"}],"nextToken":null}}};
        // return Promise.resolve(dummyData.data.listInterventions.items);
    }

    async createInterventionAsync(formData: any, userId: string | null) {
        const data: any = formData?.data;
        if (!data) {
            return;
        }

        delete data.form_data;

        const request: CreateInterventionsInput = data;
        request.user_id = userId;
        request.date = !!formData.data.date ? formData.data.date.toISOString() : null;

        if (!request.date) {
            console.warn('eForm:: Form Date Not Defined');
            return null; // TODO: error message
        }

        return await this._interventionsService.CreateInterventions(request);
    }
}

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
