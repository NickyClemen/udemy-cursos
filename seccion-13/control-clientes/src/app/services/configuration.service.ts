import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Configuration } from '../modules/configuration.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
  configurationDoc: AngularFirestoreDocument<Configuration>;
  configuration: Observable<Configuration>;

  id = 1;

  constructor(private db: AngularFirestore) {}

  getConfiguration(): Observable<Configuration> {
    this.configurationDoc = this.db.doc<Configuration>(`configuracion/${ this.id }`);
    this.configuration = this.configurationDoc.valueChanges();
    return this.configuration;
  }

  modificarConfiguration(configuration: Configuration) {
    this.configurationDoc = this.db.doc<Configuration>(`configuracion/${ this.id }`);
    this.configurationDoc.update(configuration);
  }

}
