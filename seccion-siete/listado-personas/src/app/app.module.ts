import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    EgresoComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IngresoService,
    EgresoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
