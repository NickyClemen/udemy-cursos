import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  permitirRegister: boolean;

  constructor(private loginService: LoginService,
              private router: Router,
              private configurationService: ConfigurationService) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.configurationService.getConfiguration().subscribe(configuration => {
      this.permitirRegister = configuration.permitirRegistro;
    });
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
