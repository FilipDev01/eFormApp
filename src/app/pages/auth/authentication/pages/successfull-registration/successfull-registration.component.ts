import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private _auth: AuthenticationService, private _router: Router) {

    }

    ngOnInit(): void { }

    async completeRegistrationAsync() {
        this.errorMessage = null;
        this.processing = true;
        const res = await this._auth.confirmSignUpAsync(this.confirmationKey);
        if (!!res && !res.error) {
            this._router.navigate(['/'])
        }
        
        this.processing = false;

    }
}
