import { Injectable } from '@angular/core';
import Amplify, { Auth, API } from 'aws-amplify';

@Injectable({ providedIn: 'root', })

export class AdminQueriesService {

    private _nextToken: string;

    constructor() { }

    async addToGroupAsync(username: string, groupName: string) {
        let apiName = 'AdminQueries';
        let path = '/addUserToGroup';
        let myInit = {
            body: {
                "username": username, // "awesomeeditor",
                "groupname": groupName // "editors"
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }

        return await API.post(apiName, path, myInit);
    }


    async getUsersAsync(groupName: string, limit: any) {
        let apiName = 'AdminQueries';
        let path = '/listUsersInGroup';
        let myInit = {
            queryStringParameters: {
                "groupname": groupName,
                "limit": limit,
                "token": this._nextToken
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        };

        const { NextToken, ...rest } = await API.get(apiName, path, myInit);
        this._nextToken = NextToken;
        return rest;
    }
}