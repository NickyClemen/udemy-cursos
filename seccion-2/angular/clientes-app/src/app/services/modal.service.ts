import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modal: boolean = false;
  private _notificarUpload: any = new EventEmitter<any>();

  constructor() { }

  get notificarUpload(): EventEmitter<any> {
    return this._notificarUpload;
  }

  public abrirModal(): void {
    this.modal = true;
  }

  public cerrarModal(): void {
    this.modal = false;
  }
}
