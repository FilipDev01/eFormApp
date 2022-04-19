import { Injectable } from "@angular/core";
import { APIService, ModelCovidMonitoringFilterInput, ListCovidMonitoringsQuery, ModelCovidMonitoringConditionInput, ModelStringInput, UpdateCovidMonitoringInput } from "../graphql/graphql.service";

@Injectable({ providedIn: 'root', })

export class CovidMonitoringFormService {
    private _covidMonitoringService: APIService;

    constructor() {
        this._covidMonitoringService = new APIService();
    }

    async getCovidMonitoringAsync(userId: string | null, fromDate?: Date) {
        if (!userId) {
            return null;
        }

        const uId: ModelStringInput = { eq: userId }
        const filter: ModelCovidMonitoringFilterInput = { user_id: uId };

        // Add Query Start From Limit
        if (!!fromDate) {
            const firstDayOfMonth = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1);
            const date: ModelStringInput = { ge: this._toLocalIsoString(firstDayOfMonth, true) };
            filter.date = date;
        }

        const covidMonitoring: ListCovidMonitoringsQuery = await this._covidMonitoringService.ListCovidMonitorings(filter);
        return covidMonitoring.items;

        console.log("Dummy enlightenments");
        const dummyData: any = [{ "__typename": "AgentEnlightenment", "id": "eb4c643c-4c87-4198-af9a-129fd615daae", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-10T00:00:00.000Z", "no_individuals": 0, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:25:42.185Z", "updatedAt": "2022-02-11T11:25:42.185Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644578742207 }, { "__typename": "AgentEnlightenment", "id": "3ef12fba-902a-4108-bee5-d581915746de", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-11T00:00:00.000Z", "no_individuals": 0, "no_families": 0, "no_people_in_families": 0, "school_name": "", "no_students": 0, "community_center_name": "", "no_community_center_members": 0, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:16:59.584Z", "updatedAt": "2022-02-11T11:16:59.584Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644578219604 }, { "__typename": "AgentEnlightenment", "id": "04735970-2e3b-42ae-9b54-47f87e751b89", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-08T00:00:00.000Z", "no_individuals": 4, "no_families": 5, "no_people_in_families": 10, "school_name": "te11", "no_students": 15, "community_center_name": "test", "no_community_center_members": 45, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:40:13.528Z", "updatedAt": "2022-02-11T11:40:13.528Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644579613551 }, { "__typename": "AgentEnlightenment", "id": "656e6a40-e83d-4072-92e3-06b6dc277627", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-09T00:00:00.000Z", "no_individuals": 1, "no_families": 1, "no_people_in_families": 3, "school_name": "test", "no_students": 123, "community_center_name": "test", "no_community_center_members": 23, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:28:35.095Z", "updatedAt": "2022-02-11T11:28:35.095Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644578915117 }, { "__typename": "AgentEnlightenment", "id": "e1d6ebcb-c2aa-4a6c-8c2c-fdb708aea6a0", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-07T00:00:00.000Z", "no_individuals": 123, "no_families": 123, "no_people_in_families": 123, "school_name": "123", "no_students": 23, "community_center_name": "test", "no_community_center_members": 123, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:42:25.179Z", "updatedAt": "2022-02-11T11:42:25.179Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644579745203 }, { "__typename": "AgentEnlightenment", "id": "cd43efcf-91e2-4640-94e0-f892000d5ef5", "user_id": "d36d55b6-166d-4e43-8f1f-5a4c79401d8a", "date": "2022-02-06T00:00:00.000Z", "no_individuals": 1, "no_families": 3, "no_people_in_families": 1, "school_name": "tes", "no_students": 123, "community_center_name": "testkc", "no_community_center_members": 13, "enlightenmentCodes": { "__typename": "ModelAgentEnlightenmentCodeConnection", "nextToken": null, "startedAt": null }, "createdAt": "2022-02-11T11:43:54.906Z", "updatedAt": "2022-02-11T11:43:54.906Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644579834924 }];
        return Promise.resolve(dummyData);
    }

    async getCovidMonitoringReportAsync(fromDate?: Date, toDate?: Date) {
        const filter: ModelCovidMonitoringFilterInput = {};
        if (!!fromDate && !!toDate) {
            const date: ModelStringInput = { ge: this._toLocalIsoString(fromDate, true), le: this._toLocalIsoString(toDate, true) };
            filter.date = date;
        }

        if (!fromDate || !toDate) {
            return null;
        }

        const covidMonitoring: ListCovidMonitoringsQuery = await this._covidMonitoringService.ListCovidMonitorings(filter);
        return covidMonitoring.items;

        console.log("Dummy covidMonitoring REPORT");
        const dummyData: any = [{ "__typename": "CovidMonitoring", "id": "27112dd6-3246-4aad-b122-02802a6b2044", "user_id": "0e23d2dd-27e1-489b-b027-c1986a88a138", "date": "2022-02-04T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "a5": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "", "createdAt": "2022-02-13T20:40:27.313Z", "updatedAt": "2022-02-13T20:40:27.313Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644784827351 }, { "__typename": "CovidMonitoring", "id": "ab1e59a6-497d-498b-a504-5d8b6b5ff795", "user_id": "0e23d2dd-27e1-489b-b027-c1986a88a138", "date": "2022-02-05T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "a5": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "", "createdAt": "2022-02-13T20:40:59.316Z", "updatedAt": "2022-02-13T20:40:59.316Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644784859337 }, { "__typename": "CovidMonitoring", "id": "5cf3f054-ec6f-495f-b363-3e2a64d63d66", "user_id": "0e23d2dd-27e1-489b-b027-c1986a88a138", "date": "2022-02-01T00:00:00.000Z", "a1": 10, "a2": 5, "a3": 3, "a4": 5, "a5": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "0", "createdAt": "2022-02-13T18:19:48.058Z", "updatedAt": "2022-02-13T19:05:36.331Z", "_version": 2, "_deleted": null, "_lastChangedAt": 1644779136379 }, { "__typename": "CovidMonitoring", "id": "63b84fef-4b83-4b94-89ed-14e2a29834a5", "user_id": "0e23d2dd-27e1-489b-b027-c1986a88a138", "date": "2022-02-03T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "a5": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "", "createdAt": "2022-02-13T20:38:46.220Z", "updatedAt": "2022-02-13T20:38:46.220Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644784726250 }, { "__typename": "CovidMonitoring", "id": "0ad5a6b2-ce53-4ccc-baa6-802f03d1f0d6", "user_id": "0e23d2dd-27e1-489b-b027-c1986a88a138", "date": "2022-02-02T00:00:00.000Z", "a1": 10, "a2": 2, "a3": 0, "a4": 1, "a5": 5, "b1": 5, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "0", "createdAt": "2022-02-13T20:12:16.802Z", "updatedAt": "2022-02-13T20:12:25.742Z", "_version": 2, "_deleted": null, "_lastChangedAt": 1644783145793 }, { "__typename": "CovidMonitoring", "id": "c7da958b-520f-452a-9313-5245cd56891d", "user_id": null, "date": "2022-02-01T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "a5": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "", "createdAt": "2022-02-13T18:08:23.064Z", "updatedAt": "2022-02-13T18:08:23.064Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644775703098 }, { "__typename": "CovidMonitoring", "id": "0fb90d73-c7f4-4009-bdbe-a342e776c1a6", "user_id": "0e23d2dd-27e1-489b-b027-c1986a88a138", "date": "2022-02-07T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "a5": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "Poznmaka ku ockovaniu", "createdAt": "2022-02-14T11:05:35.016Z", "updatedAt": "2022-02-14T11:05:35.016Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644836735040 }, { "__typename": "CovidMonitoring", "id": "239450ed-0e71-48fb-9a4f-92f9c7a290a0", "user_id": "0e23d2dd-27e1-489b-b027-c1986a88a138", "date": "2022-02-08T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "a5": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "test", "createdAt": "2022-02-14T11:07:06.357Z", "updatedAt": "2022-02-14T11:07:06.357Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644836826381 }, { "__typename": "CovidMonitoring", "id": "2e3e3ff0-569f-4bd5-98f8-1ed057f10c6f", "user_id": null, "date": "2022-02-02T00:00:00.000Z", "a1": 0, "a2": 0, "a3": 0, "a4": 0, "a5": 0, "b1": 0, "b2": 0, "b3": 0, "b4": 0, "b5": 0, "c1": 0, "c2": 0, "c3": 0, "c4": 0, "d1": 0, "d2": 0, "d3": 0, "d4": 0, "e1": 0, "e2": 0, "e3": 0, "e4": 0, "e5": 0, "e6": 0, "e7": 0, "f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0, "f6": 0, "f7": 0, "f8": 0, "f9": 0, "f10": 0, "g1": "", "createdAt": "2022-02-13T18:14:12.071Z", "updatedAt": "2022-02-13T18:14:12.071Z", "_version": 1, "_deleted": null, "_lastChangedAt": 1644776052089 }];
        return Promise.resolve(dummyData);
    }

    async handleCovidMonitoringAsync(wizardData: any, agentId: string) {
        try {
            if (!wizardData || !wizardData.data) { return null; }

            let data: any = wizardData.data;
            delete data.form_data;

            let response: any;
            if (!!data.id) {
                response = await this.updateCovidMonitoringAsync(data, agentId);
            } else {
                response = await this.createCovidMonitoringAsync(data, agentId);
            }

            return response;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async createCovidMonitoringAsync(data: any, userId: string | null) {
        try {
            const request = data;
            request.user_id = userId;
            if (!request.date) {
                console.warn('eForm:: Form Date Not Defined');
                return null; // TODO: error message
            }

            delete request.id;
            delete request.version;

            return await this._covidMonitoringService.CreateCovidMonitoring(request);
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async updateCovidMonitoringAsync(data: any, userId: string | null) {
        try {
            // const temp: UpdateCovidMonitoringInput = {};
            const request = data;
            request.user_id = userId;
            if (!!data.version) {
                request._version = !!data.version ? data.version : null;
            }

            delete request.version;

            if (!request.date) {
                console.warn('eForm:: Form Date Not Defined');
                return null; // TODO: error message
            }

            return await this._covidMonitoringService.UpdateCovidMonitoring(request)
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    private _toLocalIsoString(date: Date, includeSeconds: boolean) {
        if (!date) {
            return '';
        }

        function pad(n: any) { return n < 10 ? '0' + n : n }
        var localIsoString = date.getFullYear() + '-'
            + pad(date.getMonth() + 1) + '-'
            + pad(date.getDate()) + 'T'
            + pad(date.getHours()) + ':'
            + pad(date.getMinutes()) + ':'
            + pad(date.getSeconds());
        if (date.getTimezoneOffset() == 0) localIsoString += 'Z';
        return localIsoString;
    };
}