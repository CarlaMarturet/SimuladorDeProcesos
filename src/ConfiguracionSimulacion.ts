import { ConfiguracionInvalidaError } from "./errores";

export class ConfiguracionSimulacion {
  constructor(
    readonly memoriaTotal: number,
    readonly quantum: number
  ) {

if (memoriaTotal <= 0) {
      throw new ConfiguracionInvalidaError('Memoria total inválida');
    }
    
 if (quantum <= 0) {
      throw new ConfiguracionInvalidaError('Quantum inválido');
    }
    
  }
  }

  

