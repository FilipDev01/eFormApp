import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthenticationService]
})
export class AuthenticationLoginComponent implements OnInit {
    public processing: boolean;
    public errorMessage: string | null;
    public user: any;

    constructor(private _auth: AuthenticationService) {
        this.user = {};
    }

    ngOnInit(): void { }

    async signIn() {
        this.errorMessage = null;
        this.processing = true;

        const res = await this._auth.signInAsync(this.user);
        
        this.processing = false;
        if (!!res && res.error) {
            this.errorMessage = "Neplatné meno alebo heslo!";
        }
    }
}
