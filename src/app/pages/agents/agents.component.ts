import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../common/global-constants';

import { AdminQueriesService } from '../../services/admin-queries/admin-queries.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  public agents: Array<any>;

  constructor(private _admiQueriesService: AdminQueriesService, private _router: Router) { }

  async ngOnInit() {
    GlobalConstants.selectedAgent = null;
    // const res: any = await this._admiQueriesService.getUsersAsync('agent', 10);
    // if (!!res) {
    //   this.agents = res.Users;
    // }

     this.agents = JSON.parse('[{"Username":"8138b8ab-bb38-48eb-a0eb-e4f6b99b8f46","Attributes":[{"Name":"sub","Value":"8138b8ab-bb38-48eb-a0eb-e4f6b99b8f46"},{"Name":"email_verified","Value":"false"},{"Name":"given_name","Value":"Filip Test 5"},{"Name":"email","Value":"eformft5@mailinator.com"}],"UserCreateDate":"2022-01-29T17:15:07.153Z","UserLastModifiedDate":"2022-01-29T17:15:07.153Z","Enabled":true,"UserStatus":"UNCONFIRMED"},{"Username":"a2234002-5883-4eee-993b-cef194873544","Attributes":[{"Name":"sub","Value":"a2234002-5883-4eee-993b-cef194873544"},{"Name":"email_verified","Value":"false"},{"Name":"email","Value":"eformft1@mailinator.com"}],"UserCreateDate":"2022-01-29T16:16:46.681Z","UserLastModifiedDate":"2022-01-29T16:16:46.681Z","Enabled":true,"UserStatus":"UNCONFIRMED"},{"Username":"571e9de5-1b94-4691-b7f2-d2d26743f9ff","Attributes":[{"Name":"sub","Value":"571e9de5-1b94-4691-b7f2-d2d26743f9ff"},{"Name":"email_verified","Value":"false"},{"Name":"phone_number_verified","Value":"false"},{"Name":"email","Value":"test123@test.com"}],"UserCreateDate":"2022-01-25T10:08:03.959Z","UserLastModifiedDate":"2022-01-25T10:08:03.959Z","Enabled":true,"UserStatus":"UNCONFIRMED"},{"Username":"1af461ed-6079-446c-ba3a-eb883da365b8","Attributes":[{"Name":"sub","Value":"1af461ed-6079-446c-ba3a-eb883da365b8"},{"Name":"email_verified","Value":"true"},{"Name":"phone_number_verified","Value":"false"},{"Name":"email","Value":"fpdev09@gmail.com"}],"UserCreateDate":"2022-01-25T11:03:13.639Z","UserLastModifiedDate":"2022-02-01T22:35:30.297Z","Enabled":true,"UserStatus":"CONFIRMED"},{"Username":"7b499a1a-78a1-439a-a831-945f820b753e","Attributes":[{"Name":"sub","Value":"7b499a1a-78a1-439a-a831-945f820b753e"},{"Name":"email_verified","Value":"false"},{"Name":"given_name","Value":"Filip Test3"},{"Name":"email","Value":"eformft3@mailinator.com"}],"UserCreateDate":"2022-01-29T16:54:14.102Z","UserLastModifiedDate":"2022-01-29T16:54:14.102Z","Enabled":true,"UserStatus":"UNCONFIRMED"},{"Username":"101c9ff8-75b5-44e5-9b40-c36a245b4221","Attributes":[{"Name":"sub","Value":"101c9ff8-75b5-44e5-9b40-c36a245b4221"},{"Name":"email_verified","Value":"true"},{"Name":"phone_number_verified","Value":"false"},{"Name":"email","Value":"kristianberecz@gmail.com"}],"UserCreateDate":"2022-01-27T11:55:04.062Z","UserLastModifiedDate":"2022-02-02T15:48:24.512Z","Enabled":true,"UserStatus":"CONFIRMED"},{"Username":"67963220-b9e8-4b0c-a623-113342e3a733","Attributes":[{"Name":"sub","Value":"67963220-b9e8-4b0c-a623-113342e3a733"},{"Name":"email_verified","Value":"false"},{"Name":"name","Value":"Filip Test2"},{"Name":"email","Value":"eformft2@mailinator.com"}],"UserCreateDate":"2022-01-29T16:51:10.704Z","UserLastModifiedDate":"2022-01-29T16:51:10.704Z","Enabled":true,"UserStatus":"UNCONFIRMED"},{"Username":"d36d55b6-166d-4e43-8f1f-5a4c79401d8a","Attributes":[{"Name":"sub","Value":"d36d55b6-166d-4e43-8f1f-5a4c79401d8a"},{"Name":"email_verified","Value":"true"},{"Name":"phone_number_verified","Value":"false"},{"Name":"email","Value":"filip.ludma@gmail.com"}],"UserCreateDate":"2022-01-26T13:51:00.635Z","UserLastModifiedDate":"2022-02-02T20:00:27.587Z","Enabled":true,"UserStatus":"CONFIRMED"},{"Username":"6ef3c7a1-66e9-403d-aeb0-e90ab17593ff","Attributes":[{"Name":"sub","Value":"6ef3c7a1-66e9-403d-aeb0-e90ab17593ff"},{"Name":"email_verified","Value":"true"},{"Name":"given_name","Value":"Filip Test 8"},{"Name":"email","Value":"eformft8@mailinator.com"}],"UserCreateDate":"2022-01-29T17:23:56.338Z","UserLastModifiedDate":"2022-01-29T17:24:12.605Z","Enabled":true,"UserStatus":"CONFIRMED"},{"Username":"0e23d2dd-27e1-489b-b027-c1986a88a138","Attributes":[{"Name":"sub","Value":"0e23d2dd-27e1-489b-b027-c1986a88a138"},{"Name":"email_verified","Value":"true"},{"Name":"given_name","Value":"Karin Vanatkova"},{"Name":"email","Value":"eformvanatkova@mailinator.com"}],"UserCreateDate":"2022-02-02T11:37:28.630Z","UserLastModifiedDate":"2022-02-02T12:51:03.335Z","Enabled":true,"UserStatus":"CONFIRMED"}]');
  }

  goToAgentDetails(agent: any) {
    GlobalConstants.selectedAgent = agent;
    this._router.navigate(['/agent', agent.Username]);
  }
}
