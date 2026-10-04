import { BloqueMemoria } from './BloqueMemoria';

export class GestorMemoria {
  private readonly bloques: BloqueMemoria[];

  constructor(memoriaTotal: number) {
    this.bloques = [new BloqueMemoria(0, memoriaTotal)];
  }


  obtenerBloques(): readonly BloqueMemoria[] {
    return [...this.bloques];
  }
}