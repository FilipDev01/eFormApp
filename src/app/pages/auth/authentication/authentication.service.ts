import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.guard.service';
import { GlobalConstants } from '../../../common/global-constants';

@Injectable({ providedIn: 'root', })

export class AuthenticationService {
    constructor(private _authService: AuthService, private _router: Router) { }


    async signInAsync(user: any) {
        try {
            const res = await this._authService.signInAsync(user.email, user.password)
            if (!!res) {
                this._router.navigate(['/processing']);
            }

            return { success: true, error: null };
        } catch (err: any) {
            return { success: false, error: err };
        }
    }

    async signUpAsync(user: any) {
        try {
            const res: any = await this._authService.signUpAsync(user.email, user.password, user.name);
            if (!!res && res.error) {
                return { success: false, error: res.error };
            }

            return { success: true, error: null };
        } catch (err: any) {
            return { success: false, error: err };
        }
    }

    async confirmSignUpAsync(code: string) {
        try {
            const res: any = await this._authService.confirmSignUpAsync(code);
            if (!!res && res.error) {
                return { success: false, error: res.error };
            }

            return { success: true, error: null };
        } catch (err: any) {
            return { success: false, error: err };
        }
    }
}