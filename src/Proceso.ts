import { ProcesoInvalidoError } from './errores';

export class Proceso {
  constructor(
    readonly pid: number,
    readonly memoriaRequerida: number,
    readonly cpuTotal: number
  ) {
    Proceso.validarEnteroPositivo(pid, 'El PID');
    Proceso.validarEnteroPositivo(memoriaRequerida, 'La memoria requerida');
    Proceso.validarEnteroPositivo(cpuTotal, 'El tiempo de CPU');
  }

  private static validarEnteroPositivo(valor: number, nombre: string): void {
    if (!Number.isInteger(valor) || valor <= 0) {
      throw new ProcesoInvalidoError(`${nombre} debe ser un entero positivo`);
    }
  }
}