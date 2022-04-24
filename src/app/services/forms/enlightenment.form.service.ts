import { Injectable } from '@angular/core';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { listAllAgentEnlightenments } from "../graphql/graphql.queries";

import { APIService, ModelEnlightenmentsFilterInput, ModelStringInput, ListAgentEnlightenmentsQuery, CreateAgentEnlightenmentInput, UpdateAgentEnlightenmentInput, ModelAgentEnlightenmentConditionInput } from '../graphql/graphql.service';

export interface GraphQLOptions {
    filter?: object;
    limit?: number;
    authMode?: GRAPHQL_AUTH_MODE;
}

async function callGraphQL<T>(query: any, options?: GraphQLOptions): Promise<GraphQLResult<T>> {
    return (await API.graphql(graphqlOperation(query, options))) as GraphQLResult<T>
}

export default callGraphQL;

@Injectable({ providedIn: 'root', })

export class EnlightenmentsFormService {
    private _enlightenmentsService: APIService

    constructor(

    ) {
        this._enlightenmentsService = new APIService();
    }


    async handleEnlightenmentAsync(type: string, wizardData: any, agentId: string) {
        try {
            if (!wizardData || !wizardData.data) { return null; }

            let data: any = wizardData.data;
            delete data.form_data;

            let response: any;
            if (!!data.id) {
                response = await this.updateEnlightenmentAsync(data, agentId);
            } else {
                response = await this.createEnlightenmentAsync(data, agentId);
            }

            if (!!response && response.id) {
                await this.handleEnlightenmentCodeAsync(response.id, data);
            }

            return response;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async getEnlightenmentsAsync(userId: string | null, fromDate?: any, toDate?: any) {
        if (!userId) {
            return null;
        }

        const uid: ModelStringInput = { eq: userId }
        const filter: ModelEnlightenmentsFilterInput = { user_id: uid };

        // Add Query Start From Limit
        if (!!fromDate) {
            let date = fromDate;
            if (typeof fromDate !== 'string') {
                const firstDayOfMonth = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1);
                date = this._toLocalIsoString(firstDayOfMonth, false);
            }

            const rdate: ModelStringInput = { ge: date };
            filter.date = rdate;
        }

        // Add Query Start To Limit
        if (!!fromDate && !!toDate) {
            const date: ModelStringInput = { ge: this._toLocalIsoString(fromDate, false), le: this._toLocalIsoString(toDate, false) };
            filter.date = date;
        }

        const enlightenments: ListAgentEnlightenmentsQuery = await this._enlightenmentsService.ListAgentEnlightenments(filter, 99999);
        return enlightenments.items;

        console.log("Dummy enlightenments");
        const dummyData: any = [{ "__typename": "AgentEnlightenment", "id": "eb4c643c-4c87-4198-af9a-129fd615daae", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-10T00:00:00.000Z", "no_individuals": 0, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:25:42.185Z", "updatedAt": "2022-02-11T11:25:42.185Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644578742207 }, { "__typename": "AgentEnlightenment", "id": "3ef12fba-902a-4108-bee5-d581915746de", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-11T00:00:00.000Z", "no_individuals": 0, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:16:59.584Z", "updatedAt": "2022-02-11T11:16:59.584Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644578219604 }, { "__typename": "AgentEnlightenment", "id": "04735970-2e3b-42ae-9b54-47f87e751b89", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-08T00:00:00.000Z", "no_individuals": 4, "no_families": 5, "no_people_in_families": 10, "school_name": "te11", "no_students": 15, "community_center_name": "test", "no_community_center_members": 45, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:40:13.528Z", "updatedAt": "2022-02-11T11:40:13.528Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644579613551 }, { "__typename": "AgentEnlightenment", "id": "656e6a40-e83d-4072-92e3-06b6dc277627", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-09T00:00:00.000Z", "no_individuals": 1, "no_families": 1, "no_people_in_families": 3, "school_name": "test", "no_students": 123, "community_center_name": "test", "no_community_center_members": 23, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:28:35.095Z", "updatedAt": "2022-02-11T11:28:35.095Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644578915117 }, { "__typename": "AgentEnlightenment", "id": "e1d6ebcb-c2aa-4a6c-8c2c-fdb708aea6a0", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-07T00:00:00.000Z", "no_individuals": 123, "no_families": 123, "no_people_in_families": 123, "school_name": "123", "no_students": 23, "community_center_name": "test", "no_community_center_members": 123, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:42:25.179Z", "updatedAt": "2022-02-11T11:42:25.179Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644579745203 }, { "__typename": "AgentEnlightenment", "id": "cd43efcf-91e2-4640-94e0-f892000d5ef5", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-06T00:00:00.000Z", "no_individuals": 1, "no_families": 3, "no_people_in_families": 1, "school_name": "tes", "no_students": 123, "community_center_name": "testkc", "no_community_center_members": 13, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:43:54.906Z", "updatedAt": "2022-02-11T11:43:54.906Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644579834924 }];
        return Promise.resolve(dummyData);
    }

    async getEnlightenmentsReportAsync(fromDate?: Date, toDate?: Date, agentId?: string) {
        try {
            const filter: ModelAgentEnlightenmentConditionInput = {};

            // Add Query Start From Limit
            if (!!fromDate) {
                const firstDayOfMonth = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1);
                const date: ModelStringInput = { ge: this._toLocalIsoString(firstDayOfMonth, false) };
                filter.date = date;
            }

            // Add Query Start To Limit
            if (!!fromDate && !!toDate) {
                const date: ModelStringInput = { ge: this._toLocalIsoString(fromDate, false), le: this._toLocalIsoString(toDate, false) };
                filter.date = date;
            }

            if (!!agentId) {
                const uid: ModelStringInput = { eq: agentId }
                filter.user_id = uid;
            }

            const options: GraphQLOptions = { filter: filter };
            const data: any = await callGraphQL<any>(listAllAgentEnlightenments, options);
            if (!!data && !!data.data && !!data.data.listAgentEnlightenments && Array.isArray(data.data.listAgentEnlightenments.items)) {
                return data.data.listAgentEnlightenments.items;
            }

            return Promise.resolve([]);
            // console.log("Dummy getEnlightenmentsReportAsync");
            // const dummyData: any = [{ "id": "80e950b5-df24-4748-80d6-347b6dc5aab3", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-05T00:00:00.000Z", "no_individuals": 8, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "items": [{ "id": "40e4b020-447a-45da-b19f-cb4fb533676a", "agentEnlightenmentID": "80e950b5-df24-4748-80d6-347b6dc5aab3", "type": 0, "f1": null, "f2": null, "f3": null, "f4": null, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": 8, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T18:43:22.760Z", "updatedAt": "2022-02-11T18:43:22.760Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T18:43:00.997Z", "updatedAt": "2022-02-11T18:43:00.997Z" }, { "id": "f157a53a-d450-4f6c-adbc-5731367924db", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-02T00:00:00.000Z", "no_individuals": 10, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "test kc", "no_community_center_members": 5, "enlightenmentCodes": { "items": [{ "id": "0c9f3c8a-d1fa-4cb3-abb5-0e04a49fa94d", "agentEnlightenmentID": "f157a53a-d450-4f6c-adbc-5731367924db", "type": 0, "f1": null, "f2": null, "f3": null, "f4": 5, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": 5, "f19": null, "f20": null, "f21": null, "f22": 3, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T17:11:41.085Z", "updatedAt": "2022-02-11T17:13:08.109Z" }, { "id": "c0717a7e-353c-4902-979a-6296cd7018fe", "agentEnlightenmentID": "f157a53a-d450-4f6c-adbc-5731367924db", "type": 3, "f1": null, "f2": null, "f3": null, "f4": null, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": 5, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T17:11:41.099Z", "updatedAt": "2022-02-11T17:13:08.111Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T17:11:40.865Z", "updatedAt": "2022-02-11T17:13:07.900Z" }, { "id": "286e0de1-138c-48eb-bced-f95658f42c5e", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-07T00:00:00.000Z", "no_individuals": 7, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "items": [{ "id": "5024940d-c8fa-4570-922f-f4c9c2755846", "agentEnlightenmentID": "286e0de1-138c-48eb-bced-f95658f42c5e", "type": 0, "f1": null, "f2": null, "f3": null, "f4": null, "f5": null, "f6": null, "f7": 7, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T18:48:27.284Z", "updatedAt": "2022-02-11T18:48:27.284Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T18:48:14.957Z", "updatedAt": "2022-02-11T18:48:14.957Z" }, { "id": "d097be04-f886-4bea-a45b-8d2b5a389fd6", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-01T00:00:00.000Z", "no_individuals": 5, "no_families": 5, "no_people_in_families": 10, "school_name": "Skola tes", "no_students": 10, "community_center_name": "test KC", "no_community_center_members": 10, "enlightenmentCodes": { "items": [{ "id": "76f2ecd7-b3d0-40fe-9e99-090ffda452ee", "agentEnlightenmentID": "d097be04-f886-4bea-a45b-8d2b5a389fd6", "type": 0, "f1": 3, "f2": null, "f3": 2, "f4": null, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T17:11:12.011Z", "updatedAt": "2022-02-11T17:16:00.597Z" }, { "id": "a74b652f-b586-4730-9924-e92370e9d573", "agentEnlightenmentID": "d097be04-f886-4bea-a45b-8d2b5a389fd6", "type": 3, "f1": null, "f2": null, "f3": 10, "f4": null, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T17:16:00.624Z", "updatedAt": "2022-02-11T17:16:00.624Z" }, { "id": "ac2d292b-8037-4691-8597-54674a7ce8ab", "agentEnlightenmentID": "d097be04-f886-4bea-a45b-8d2b5a389fd6", "type": 1, "f1": null, "f2": 5, "f3": 5, "f4": 5, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T17:11:12.003Z", "updatedAt": "2022-02-11T17:16:00.606Z" }, { "id": "e72dadcb-b1e9-49f8-bc2f-66ff110cbaa9", "agentEnlightenmentID": "d097be04-f886-4bea-a45b-8d2b5a389fd6", "type": 2, "f1": null, "f2": null, "f3": null, "f4": 10, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": 10, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T17:15:25.742Z", "updatedAt": "2022-02-11T17:16:00.611Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T17:11:11.831Z", "updatedAt": "2022-02-11T17:16:00.370Z" }, { "id": "bf8107f9-c943-4e19-826d-eb18e314739b", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-04T00:00:00.000Z", "no_individuals": 10, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "items": [{ "id": "2dec344b-0ee4-4e03-ba25-2bdb4b3e726c", "agentEnlightenmentID": "bf8107f9-c943-4e19-826d-eb18e314739b", "type": 0, "f1": null, "f2": null, "f3": 10, "f4": null, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T18:42:38.356Z", "updatedAt": "2022-02-11T18:42:38.356Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T18:42:28.237Z", "updatedAt": "2022-02-11T18:42:28.237Z" }, { "id": "4effd3d1-bc57-443b-b141-82356faac5a1", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-06T00:00:00.000Z", "no_individuals": 23, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "items": [{ "id": "68b1ec22-bc59-4fe1-84a1-0bdb554edf62", "agentEnlightenmentID": "4effd3d1-bc57-443b-b141-82356faac5a1", "type": 0, "f1": null, "f2": null, "f3": null, "f4": 23, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T18:44:20.391Z", "updatedAt": "2022-02-11T18:44:20.391Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T18:44:20.227Z", "updatedAt": "2022-02-11T18:44:20.227Z" }, { "id": "2964de50-6c07-4275-8805-723e879f5b3e", "user_id": "0e23d2dd-27e1-489b-b027-c1986a88a138", "date": "2022-02-01T00:00:00.000Z", "no_individuals": 3, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "items": [{ "id": "88bb9123-efa3-4118-b91e-5c8e7283a0e5", "agentEnlightenmentID": "2964de50-6c07-4275-8805-723e879f5b3e", "type": 0, "f1": null, "f2": 3, "f3": null, "f4": null, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-14T09:38:53.791Z", "updatedAt": "2022-02-14T09:38:53.791Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-14T09:38:53.538Z", "updatedAt": "2022-02-14T09:38:53.538Z" }, { "id": "09f8267e-9f5c-459c-9f83-94b4c59ea0e2", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-03T00:00:00.000Z", "no_individuals": 0, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "Komutnitne Centrum", "no_community_center_members": 10, "enlightenmentCodes": { "items": [{ "id": "957db4a9-09c6-4327-9a4e-1f9344fd0db4", "agentEnlightenmentID": "09f8267e-9f5c-459c-9f83-94b4c59ea0e2", "type": 3, "f1": null, "f2": null, "f3": 2, "f4": 3, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": 5, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T18:39:50.350Z", "updatedAt": "2022-02-11T18:39:50.350Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T18:39:50.091Z", "updatedAt": "2022-02-11T18:39:50.091Z" }, { "id": "5fdda953-1d98-4627-bb67-911b76aae13a", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-08T00:00:00.000Z", "no_individuals": 8, "no_families": 2, "no_people_in_families": 10, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "items": [{ "id": "35efb927-57a5-42b8-b9d8-a751e3a618f9", "agentEnlightenmentID": "5fdda953-1d98-4627-bb67-911b76aae13a", "type": 1, "f1": null, "f2": null, "f3": 5, "f4": 5, "f5": null, "f6": null, "f7": null, "f8": null, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T18:50:11.149Z", "updatedAt": "2022-02-11T18:50:11.149Z" }, { "id": "87b5c063-a9a5-455c-b385-fbf458e38035", "agentEnlightenmentID": "5fdda953-1d98-4627-bb67-911b76aae13a", "type": 0, "f1": null, "f2": null, "f3": null, "f4": null, "f5": null, "f6": null, "f7": null, "f8": 8, "f9": null, "f10": null, "f11": null, "f12": null, "f13": null, "f14": null, "f15": null, "f16": null, "f17": null, "f18": null, "f19": null, "f20": null, "f21": null, "f22": null, "f23": null, "f24": null, "f25": null, "f26": null, "f27": null, "f28": null, "f29": null, "f30": null, "createdAt": "2022-02-11T18:49:33.728Z", "updatedAt": "2022-02-11T18:50:11.172Z" }], "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T18:49:33.518Z", "updatedAt": "2022-02-11T18:50:10.916Z" }];
            // return Promise.resolve(dummyData);
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async createEnlightenmentAsync(data: any, userId: string | null) {
        try {
            if (!data.date) {
                console.warn('eForm:: Form Date Not Defined');
                return null; // TODO: error message
            }

            const request: CreateAgentEnlightenmentInput = {
                user_id: userId,
                date: data.date,
                no_individuals: !!data.no_individuals ? data.no_individuals : 0,
                no_families: !!data.no_families ? data.no_families : 0,
                no_people_in_families: !!data.no_people_in_families ? data.no_people_in_families : 0,
                school_name: !!data.school_name ? data.school_name : '',
                school_year: !!data.school_year ? data.school_year : '',
                no_students: !!data.no_students ? data.no_students : 0,
                community_center_name: !!data.community_center_name ? data.community_center_name : '',
                no_community_center_members: !!data.no_community_center_members ? data.no_community_center_members : 0
            };

            return await this._enlightenmentsService.CreateAgentEnlightenment(request);
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async updateEnlightenmentAsync(data: any, userId: string | null) {
        try {
            if (!data.date || !data.id) {
                console.warn('eForm:: Form Date Not Defined');
                return null; // TODO: error message
            }

            const request: UpdateAgentEnlightenmentInput = {
                id: data.id,
                user_id: userId,
                date: data.date,
                no_individuals: !!data.no_individuals ? data.no_individuals : 0,
                no_families: !!data.no_families ? data.no_families : 0,
                no_people_in_families: !!data.no_people_in_families ? data.no_people_in_families : 0,
                school_name: !!data.school_name ? data.school_name : '',
                school_year: !!data.school_year ? data.school_year : '',
                no_students: !!data.no_students ? data.no_students : 0,
                community_center_name: !!data.community_center_name ? data.community_center_name : '',
                no_community_center_members: !!data.no_community_center_members ? data.no_community_center_members : 0,
                _version: !!data.version ? data.version : null,
            };

            return await this._enlightenmentsService.UpdateAgentEnlightenment(request)
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async getEnlightenmentCodeAsync(enlightenmentId: string) {
        try {
            if (!enlightenmentId) {
                return null;
            }

            return await this._enlightenmentsService.GetAgentEnlightenment(enlightenmentId);

        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async handleEnlightenmentCodeAsync(enlightenmentId: string, formData: any) {
        try {
            if (!enlightenmentId || !formData) {
                return null;
            }

            const codesToCreate = [
                { value: 0, key: 'individual_codes' },
                { value: 1, key: 'family_codes' },
                { value: 2, key: 'school_codes' },
                { value: 3, key: 'community_center_codes' },
            ];

            const tasks: Array<any> = new Array<any>();
            codesToCreate.forEach((code: any) => {
                const request = this._setEnlightenmentCodeRequest(enlightenmentId, formData, code);
                if (!!request) {
                    if (!!request.id) {
                        tasks.push(this._enlightenmentsService.UpdateAgentEnlightenmentCode(request));
                    } else {
                        tasks.push(this._enlightenmentsService.CreateAgentEnlightenmentCode(request));
                    }
                }
            });

            return Promise.all(tasks);
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    private _setEnlightenmentCodeRequest(enlightenmentId: string, formData: any, code: any) {
        if (!code || !formData || !formData[code.key]) {
            return null;
        }

        const request: any = { agentEnlightenmentID: enlightenmentId, type: code.value };
        if (!!formData[`${code.key}_id`]) {
            request.id = formData[`${code.key}_id`];
        }

        if (!!formData[`${code.key}_version`]) {
            request._version = formData[`${code.key}_version`];
        }

        formData[code.key].forEach((item: any) => {
            const property = item.description.toLowerCase();
            const count = item.count;
            request[property] = count;
        });

        return request;
    };

    private _toLocalIsoString(date: Date, includeTime: boolean) {
        if (!date) {
            return '';
        }

        function pad(n: any) { return n < 10 ? '0' + n : n }
        var localIsoString = date.getFullYear() + '-'
            + pad(date.getMonth() + 1) + '-'
            + pad(date.getDate());

        if (includeTime) {
            localIsoString = localIsoString + 'T'
                + pad(date.getHours()) + ':'
                + pad(date.getMinutes()) + ':'
                + pad(date.getSeconds());

            if (date.getTimezoneOffset() == 0) localIsoString += 'Z';
        }

        return localIsoString;
    };
}
