import { ConfiguracionSimulacion } from './ConfiguracionSimulacion';

export class Simulador {
  private _tick = 0;

  constructor(configuracion: ConfiguracionSimulacion) {}

  get tickActual(): number {
    return this._tick;
  }
}