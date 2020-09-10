import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      /* Cuando se autentica en la base de datos, se obtiene un token (string) que se adjuntan a la URL para
      hacer peticiones al servidor. */
      this.loginService.login(email, password);
  }

}
