import { Injectable } from '@angular/core';
import { APIService, CreateEnlightenmentsInput, ListEnlightenmentsQuery, ModelEnlightenmentsFilterInput, ModelStringInput } from '../graphql/graphql.service';

@Injectable({ providedIn: 'root', })

export class EnlightenmentsFormService {
    private _enlightenmentsService: APIService

    constructor() {
        this._enlightenmentsService = new APIService();
    }

    async getEnlightenmentsAsync(userId: string | null) {
        if (!userId) {
            return null;
        }

        const uId: ModelStringInput = { eq: userId }
        const filter: ModelEnlightenmentsFilterInput = { user_id: uId };

        const enlightenments: ListEnlightenmentsQuery = await this._enlightenmentsService.ListEnlightenments(filter);
        return enlightenments.items;

        // const dummyData: any = { "data": { "listInterventions": { "__typename": "ModelInterventionsConnection", "items": [{ "__typename": "Interventions", "id": "227e2322-519a-4ba6-98ae-e06463551e14", "user_id": "6ef3c7a1-66e9-403d-aeb0-e90ab17593ff", "date": "2022-01-01T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "c5": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "d5": 0, "d6": 0, "d7": 0, "d8": 0, "e1": 0, "createdAt": "2022-01-31T18:50:38.015Z", "updatedAt": "2022-01-31T18:50:38.015Z" }], "nextToken": null } } };
        // return Promise.resolve(dummyData.data.listInterventions.items);
    }

    async createEnlightenmentAsync(formData: any, userId: string | null) {
        const data: any = formData?.data;
        if (!data) {
            return;
        }

        delete data.form_data;

        const request: CreateEnlightenmentsInput = data;
        if (!!request) {
            request.user_id = userId;
            request.date = !!formData.data.date ? formData.data.date.toISOString() : null;

            if (!!request.date) {
                const response = await this._enlightenmentsService.CreateEnlightenments(request);
                console.log(response);
            } else {
                // TODO: error message
            }
        }

    }
}

export class EnlightenmentFormModel {
    public tableRows: any[]

    constructor(interventions: Array<any>) {

    }
}
