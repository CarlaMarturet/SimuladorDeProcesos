export class BloqueMemoria {
  constructor(
    readonly inicio: number,
    readonly tamanio: number
  ) {}

   get estaLibre(): boolean {
    return true;
  }
}