import { describe, it, expect } from 'vitest';
import { SimuladorError, ConfiguracionInvalidaError, ProcesoInvalidoError } from '../src/errores';

describe('Errores del dominio', () => {
  it('ConfiguracionInvalidaError es un SimuladorError', () => {
    expect(new ConfiguracionInvalidaError('x')).toBeInstanceOf(SimuladorError);
  });

  it('ProcesoInvalidoError es un SimuladorError', () => {
    expect(new ProcesoInvalidoError('x')).toBeInstanceOf(SimuladorError);
  });
});