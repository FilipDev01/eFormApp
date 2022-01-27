import { Component, OnInit } from '@angular/core';
import Amplify, { Auth, API } from 'aws-amplify';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  private _nextToken: any;
  constructor() { }

  ngOnInit(): void {
    this.listGroups(10);
  }

  async listEditors(limit: number) {
    let apiName = 'AdminQueries';
    let path = '/listUsersInGroup';
    let myInit = {
      queryStringParameters: {
        "groupname": "Editors",
        "limit": limit,
        "token": this._nextToken
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
    }
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    this._nextToken = NextToken;
    return rest;
  }

  async listGroups(limit: number) {
    let apiName = 'AdminQueries';
    let path = '/listUsers';
    let myInit = {
      queryStringParameters: {
        "limit": limit,
        "token": this._nextToken
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
    }
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    this._nextToken = NextToken;
    return rest;
  }

}
