import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUser } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
import { GlobalConstants } from 'src/app/common/global-constants';

@Injectable()
export class AuthService {

    constructor(private _router: Router) {

    }

    async isLoggedInAsync(): Promise<boolean> {
        try {
            const user: any = await Auth.currentAuthenticatedUser();
            if (!!user) {
                GlobalConstants.userId = user.attributes.sub;
                GlobalConstants.currentUserGroups = user.signInUserSession.accessToken.payload['cognito:groups'];
            }

            return !!user;
        }
        catch (err) {
            return false;
        }
    }

    async logout() {
        try {
            await Auth.signOut({ global: true });
            this._router.navigate(['/login']);
        } catch (err) {
            throw err;
        }
    }

}
