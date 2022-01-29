import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.guard.service';


@Injectable({ providedIn: 'root', })

export class AuthenticationService {
    constructor(private _authService: AuthService, private _router: Router) {

    }


    async signInAsync(user: any) {
        try {
            const res = await this._authService.signInAsync(user.name, user.password)
            if (!!res) {
                this._router.navigate(['/dashboard']);
            }

            return false;
        } catch (err: any) {
            return false;
        }
    }
}