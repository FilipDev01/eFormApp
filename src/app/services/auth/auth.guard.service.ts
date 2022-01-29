import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUser } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
import { GlobalConstants } from '../../common/global-constants';

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
            this._router.navigate(['/authentication']);
        } catch (err) {
            throw err;
        }
    }

    async signUpAsync(username: string, password: string, email: any) {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email, // optional
                    // other custom attributes 
                }
            });

            return user;
        } catch (error) {
            return null;
        }
    }

    async confirmSignUpAsync(username: string, code: string) {
        try {
            return await Auth.confirmSignUp(username, code);
        } catch (error) {
            return null;
        }
    }

    async signInAsync(username: string, password: string) {
        try {
            return await Auth.signIn(username, password);
        } catch (error) {
            throw error;
        }
    }

    async resendConfirmationCodeAsync(username: string) {
        try {
            return await Auth.resendSignUp(username);
        } catch (err) {
            return null;
        }
    }

}
