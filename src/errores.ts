
export class SimuladorError extends Error {
  constructor(mensaje: string) {
    super(mensaje);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}


export class ConfiguracionInvalidaError extends SimuladorError {}
