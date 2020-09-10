import { Region } from './region.model';

export class Cliente {
  public id: number;
  public nombre: string;
  public apellido: string;
  public createAt: Date;
  public email: string;
  public foto: string;
  public region: Region;

  constructor() {}
}
