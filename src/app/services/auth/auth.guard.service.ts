import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUser } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthService {

    constructor(private _router: Router) {

    }

    async isLoggedInAsync(): Promise<CognitoUser | null> {
        try {
            return Auth.currentAuthenticatedUser()
                .then((user: CognitoUser) => {
                    return user;
                })
                .catch((err: any) => {
                    return null;
                });

        }
        catch (err) {
            throw err;
        }
    }

    logout() {
        try {
            Auth.signOut({ global: true }).then((res: any) => {
                this._router.navigate(['/']);
            });

        } catch (err) {
            throw err;
        }
    }
}
