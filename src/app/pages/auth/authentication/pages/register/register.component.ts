import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthenticationService } from '../../authentication.service';

@Component({
    selector: 'app-auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [AuthenticationService]
})
export class AuthenticationRegisterComponent implements OnInit {
    public processing: boolean;
    public errorMessage: string | null;
    public user: any;

    constructor(private _auth: AuthenticationService, private _router: Router) {
        this.user = {};
    }

    ngOnInit(): void { }



    async signUpAsync(form: NgForm): Promise<void> {
        this.errorMessage = null;
        this.processing = true;

        if (this.isPasswordValid()) {
            const res: any = await this._auth.signUpAsync(this.user);
            if (!!res && !!res.error) {
                this.handleError(res.error);
            } else {
                GlobalConstants.user = this.user;
                this._router.navigate(['/authentication/complete-registration']);
            }
        }

        this.processing = false;
    }

    private isPasswordValid(): boolean {
        if (this.user.password !== this.user.confirm_password) {
            this.errorMessage = 'Heslo a potvrdenie hesla sa nezhoduje!';
            return false;
        }

        return true;
    }

    private handleError(er: any) {
        if (er?.name === 'UsernameExistsException') {
            this.errorMessage = "Email alebo Meno bolo už zaregistrované. Skúste prosím inú kombináciu";
        } else {
            this.errorMessage = "Vyskytol sa nečakaný problém. Prosím skúste neskôr.";
        }
    }
}

