/** Error base del dominio del simulador. */
export class SimuladorError extends Error {
  constructor(mensaje: string) {
    super(mensaje);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/** Se lanza cuando la memoria total o el quantum no son enteros positivos. */
export class ConfiguracionInvalidaError extends SimuladorError {}
