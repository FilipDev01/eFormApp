import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
