import { ConfiguracionInvalidaError } from "./errores";

export class ConfiguracionSimulacion {
  constructor(
    readonly memoriaTotal: number,
    readonly quantum: number
  ) {

  ConfiguracionSimulacion.validarEnteroPositivo(memoriaTotal, 'La memoria total');
    ConfiguracionSimulacion.validarEnteroPositivo(quantum, 'El quantum');
  }

  private static validarEnteroPositivo(valor: number, nombre: string): void {
    if (!Number.isInteger(valor) || valor <= 0) {
      throw new ConfiguracionInvalidaError(`${nombre} debe ser un entero positivo`);
    }
  }
  }

  

