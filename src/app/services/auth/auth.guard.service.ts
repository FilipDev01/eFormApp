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

                GlobalConstants.selectedAgent = !!GlobalConstants.selectedAgent ? GlobalConstants.selectedAgent : user;
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

    async signUpAsync(username: string, password: string, name: string) {
        try {
            const email = username;

            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email, // email
                    given_name: name
                }
            });

            return user;
        } catch (error) {
            throw error;
        }
    }

    async confirmSignUpAsync(code: string) {
        try {
            const user = GlobalConstants.user;
            if (!!user) {
                return await Auth.confirmSignUp(user.email, code);
            } else {
                return null;
            }

        } catch (error) {
            throw error;
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
            throw err;
        }
    }

}
