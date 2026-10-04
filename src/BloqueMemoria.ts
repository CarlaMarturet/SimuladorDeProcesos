export class BloqueMemoria {
  constructor(
    readonly inicio: number,
    readonly tamanio: number,
    readonly pidAsignado: number | null = null

    
  ) {}

 get estaLibre(): boolean {
    return this.pidAsignado === null;
  }
}