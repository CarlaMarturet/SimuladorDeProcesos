import { ConfiguracionInvalidaError } from "./errores";

export class ConfiguracionSimulacion {
  constructor(
    readonly memoriaTotal: number,
    readonly quantum: number
  ) {

  if (!Number.isInteger(quantum) || quantum <= 0) {
      throw new ConfiguracionInvalidaError('Quantum inválido');
    }
    
   if (!Number.isInteger(memoriaTotal) || memoriaTotal <= 0) {
      throw new ConfiguracionInvalidaError('Memoria total inválida');
    }
  }
  }

  

