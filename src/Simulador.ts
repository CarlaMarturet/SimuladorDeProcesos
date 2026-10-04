import { BloqueMemoria } from './BloqueMemoria';
import { ConfiguracionSimulacion } from './ConfiguracionSimulacion';
import { GestorMemoria } from './GestorDeMemoria';

export class Simulador {
  private _tick = 0;
  private _cambiosContexto = 0;
  private readonly memoria: GestorMemoria;

  constructor(configuracion: ConfiguracionSimulacion) {
    this.memoria = new GestorMemoria(configuracion.memoriaTotal);
  }

  get tickActual(): number {
    return this._tick;
  }

  get cambiosContexto(): number {
    return this._cambiosContexto;
  }

  get procesoEnCpu(): number | null {
    return null;
  }

  get pidsListos(): readonly number[] {
    return [];
  }

  get pidsEsperandoMemoria(): readonly number[] {
    return [];
  }

  get pidsBloqueados(): readonly number[] {
    return [];
  }

  get pidsTerminados(): readonly number[] {
    return [];
  }

  get mapaMemoria(): readonly BloqueMemoria[] {
    return this.memoria.obtenerBloques();
  }
}