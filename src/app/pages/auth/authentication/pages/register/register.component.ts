import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
    selector: 'app-auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [AuthenticationService]
})
export class AuthenticationRegisterComponent implements OnInit {
    public processing: boolean;
    public user: any;

    constructor(private _auth: AuthenticationService) {
        this.user = {};
    }

    ngOnInit(): void { }

    async signIn() {
        this.processing = true;
        this.processing = await this._auth.signInAsync(this.user);
    }
}
