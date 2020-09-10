import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { Configuration } from 'src/app/modules/configuration.model';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  permitirRegistro = false;

  constructor(private router: Router,
              private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.configurationService.getConfiguration().subscribe((configuration: Configuration) => {
      this.permitirRegistro = configuration.permitirRegistro;
    });
  }

  guardar() {
    const configuration = { permitirRegistro: this.permitirRegistro };
    this.configurationService.modificarConfiguration(configuration);
    this.router.navigate(['/']);
  }

}
