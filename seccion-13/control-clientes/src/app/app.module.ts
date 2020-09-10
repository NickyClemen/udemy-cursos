import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClientService } from './services/client.service';

// Import de firestore.
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

// Flash messages.
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TableComponent } from './componentes/table/table.component';
import { ClientsComponent } from './componentes/clients/clients.component';
import { EditClientsComponent } from './componentes/edit-clients/edit-clients.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ConfigurationComponent } from './componentes/configuration/configuration.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guardians/auth.guard';
import { ConfigurationService } from './services/configuration.service';
import { ConfigurationGuard } from './guardians/configuration.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ClientsComponent,
    EditClientsComponent,
    LoginComponent,
    RegisterComponent,
    ConfigurationComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ClientService,
    LoginService,
    AuthGuard,
    ConfigurationService,
    { provide: FirestoreSettingsToken, useValue: {}},
    ConfigurationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
