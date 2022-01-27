import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router"

import { AuthService } from './auth.guard.service';
import { Observable } from '../../../../node_modules/rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this._authService.isLoggedInAsync().then((res: any) => {
            if (!res) {
                this._router.navigate(['/login']);
                return false;
            }

            return true;
        });
    }
}
