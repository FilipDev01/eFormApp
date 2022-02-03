import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../../../../common/global-constants';
import { AuthenticationService } from '../../authentication.service';

@Component({
    selector: 'app-auth-complete-registration',
    templateUrl: './complete-registration.component.html',
    styleUrls: ['./complete-registration.component.css'],
    providers: [AuthenticationService]
})
export class AuthenticationCompleteRegistrationComponent implements OnInit {
    public processing: boolean;
    public errorMessage: string | null;
    public confirmationKey: string;
    public registrationCompleted: boolean;

    constructor(private _auth: AuthenticationService, private _router: Router) { }

    ngOnInit(): void { }

    async completeRegistrationAsync() {
        this.errorMessage = null;
        this.processing = true;

        const res = await this._auth.confirmSignUpAsync(this.confirmationKey);

        this._auth.signInAsync(GlobalConstants.user);
        
        // this.registrationCompleted = !!res && !res.error;

        this.processing = false;
    }
}
