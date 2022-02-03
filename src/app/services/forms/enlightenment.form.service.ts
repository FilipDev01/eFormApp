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

        // const enlightenments: ListEnlightenmentsQuery = await this._enlightenmentsService.ListEnlightenments(filter);
        // return enlightenments.items;

        const dummyData: any = {"data":{"listEnlightenments":{"__typename":"ModelEnlightenmentsConnection","items":[{"__typename":"Enlightenments","id":"41dd1671-7026-461c-bf52-885786ee5591","user_id":"d36d55b6-166d-4e43-8f1f-5a4c79401d8a","date":"2022-02-02T00:00:00.000Z","a1":5,"a2":"F2","b1":4,"b2":5,"b3":"F2,F3,F5","c1":"test sskola","c2":2,"c3":3,"c4":"F2,F4","d1":"test centrum","d2":5,"d3":"F3,F4,F5","createdAt":"2022-02-02T19:51:05.251Z","updatedAt":"2022-02-02T19:51:05.251Z"},{"__typename":"Enlightenments","id":"fce9eb56-1f20-4973-9857-bb8203ef8485","user_id":"d36d55b6-166d-4e43-8f1f-5a4c79401d8a","date":"2022-02-01T00:00:00.000Z","a1":1,"a2":"F2","b1":1,"b2":2,"b3":"F3,F5","c1":"tdet","c2":1,"c3":2,"c4":"F2,F4,F5","d1":"test","d2":1,"d3":"F2,F3","createdAt":"2022-02-02T19:48:46.683Z","updatedAt":"2022-02-02T19:48:46.683Z"}],"nextToken":null}}};
        return Promise.resolve(dummyData.data.listEnlightenments.items);
    }

    async createEnlightenmentAsync(formData: any, userId: string | null) {
        const data: any = formData?.data;
        if (!data) {
            return null;
        }

        delete data.form_data;

        const request: CreateEnlightenmentsInput = data;
        request.user_id = userId;
        request.date = !!formData.data.date ? formData.data.date.toISOString() : null;

        if (!request.date) {
            console.warn('eForm:: Form Date Not Defined');
            return null; // TODO: error message
        }

        return await this._enlightenmentsService.CreateEnlightenments(request);
    }
}

export class EnlightenmentFormModel {
    public tableRows: any[]

    constructor(interventions: Array<any>) {

    }
}
