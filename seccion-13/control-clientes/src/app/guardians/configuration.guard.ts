import { CanActivate, Router } from '@angular/router';
import { ConfigurationService } from '../services/configuration.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigurationGuard implements CanActivate {
  constructor(private router: Router,
              private configurationService: ConfigurationService) {}

  canActivate(): Observable<boolean> {
    return this.configurationService.getConfiguration().pipe(
      map(configuration => {
        if(configuration.permitirRegistro) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
