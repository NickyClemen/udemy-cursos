import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

import { Client } from '../modules/client.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientService {
  clientCollection: AngularFirestoreCollection<Client>;
  clienteDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private db: AngularFirestore) {
    this.clientCollection = db.collection('clientes',
        ref => ref.orderBy('nombre', 'asc')
    );
  }

  getClients(): Observable<Client[]> {
    this.clients = this.clientCollection.snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(action => {
            const dates = action.payload.doc.data() as Client;
            dates.id = action.payload.doc.id;
            return dates;
          });
        })
      ); // Recupera el objeto y los itera. Recupera collections.
    return this.clients;
  }

  addClient(client: Client) {
    this.clientCollection.add(client);
  }

  getClient(id: string) {
    this.clienteDoc = this.db.doc<Client>(`clients/${ id }`);
    this.client = this.clienteDoc.snapshotChanges().pipe(
      map(action => {
        if(action.payload.exists === false) {
          return null;
        } else {
          const dates = action.payload.data() as Client;
          dates.id = action.payload.id;
          return dates;
        }
      })
    );
    return this.client;
  }

  modificarCliente(client: Client) {
    this.clienteDoc = this.db.doc(`clientes/${ client.id }`);
    this.clienteDoc.update(client);
  }

  eliminarCliente(client: Client) {
    this.clienteDoc = this.db.doc(`clientes/${ client.id }`);
    this.clienteDoc.delete();
  }

}
