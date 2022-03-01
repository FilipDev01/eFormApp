import { Injectable } from '@angular/core'
import { APIService, CreateActivitiesInput, ListActivitiesQuery, ModelActivitiesFilterInput, ModelStringInput } from '../graphql/graphql.service';

@Injectable({ providedIn: 'root', })

export class ActivitiesService {
    private _activityService: APIService

    constructor() {
        this._activityService = new APIService();
    }


    async getAgentActivitiesByDateAsync(agentId: string, date: Date) {
        try {
            if (!date) { return null; }

            const dateStr: ModelStringInput = { ge: date.toISOString() };
            const agentIdStr: ModelStringInput = { eq: agentId };

            const filter: ModelActivitiesFilterInput =
            {
                user_id: agentIdStr,
                date: dateStr
            };

            const activities: ListActivitiesQuery = await this._activityService.ListActivities(filter);
            return !!activities ? activities.items : null;
        } catch (err: any) {
            console.error("Get Activity", err);
            return null;
        }
    }

    async getActivitiesAsync(date: Date, fromDate?: Date, toDate?: Date): Promise<any> {
        try {
            if (!date) { return null; }

            const dateStr: ModelStringInput = { ge: date.toISOString() }
            const filter: ModelActivitiesFilterInput = { date: dateStr };

            if (!!fromDate && !!toDate) {
                const date1: ModelStringInput = { ge: fromDate.toISOString(), le: toDate.toISOString() };
                filter.date = date1;
            }

            const activities: any = await this._activityService.ListActivities(filter);
            return !!activities ? activities.items : null;
        } catch (err: any) {
            console.error("Activities", err);
            return null;
        }
    }

    async getActivitiesByUserIdAsync(date: Date, agentId: string) {
        try {
            const filter: ModelActivitiesFilterInput = {};
            // Add Query Start From Limit
            if (!!date) {
                const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
                filter.date = { ge: firstDayOfMonth?.toISOString() };
            }

            if (!!agentId) {
                const uid: ModelStringInput = { eq: agentId }
                filter.user_id = uid;
            }

            const activities: any = await this._activityService.ListActivities(filter);
            return !!activities ? activities.items : null;
        } catch (err: any) {
            console.error("Activities", err);
            return null;
        }

    }

    async createActvityAsync(userId: string | null, status: string) {
        const request: CreateActivitiesInput = {
            user_id: userId,
            activity: status,
            date: new Date().toISOString()
        }

        if (!request.activity) {
            console.warn('eForm:: Activity Not Defined');
            return null; // TODO: error message
        }

        return await this._activityService.CreateActivities(request);
    }
}