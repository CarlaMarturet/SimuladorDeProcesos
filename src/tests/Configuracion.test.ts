
import { describe, it, expect } from 'vitest';
import { ConfiguracionSimulacion } from '../ConfiguracionSimulacion';
import { ConfiguracionInvalidaError } from '../errores';


describe('RF01 - ConfiguracionSimulacion', () => {
  it('usa 1024 KB y quantum 2 por defecto', () => {

    const c = new ConfiguracionSimulacion(1024, 2);

    expect(c.memoriaTotal).toBe(1024);
    expect(c.quantum).toBe(2);
  });

   it.each([0, -5])('rechaza memoria total no positiva: %p', valor => {
    expect(() => new ConfiguracionSimulacion(valor, 2)).toThrow(ConfiguracionInvalidaError);
  });

    it.each([0, -1])('rechaza quantum no positivo: %p', valor => {
    expect(() => new ConfiguracionSimulacion(1024, valor)).toThrow(ConfiguracionInvalidaError);

  });

   it.each([10.5, NaN, Infinity])('rechaza memoria total no entera: %p', valor => {
    expect(() => new ConfiguracionSimulacion(valor, 2)).toThrow(ConfiguracionInvalidaError);
  });

    it.each([1.5, NaN, Infinity])('rechaza quantum no entero: %p', valor => {
    expect(() => new ConfiguracionSimulacion(1024, valor)).toThrow(ConfiguracionInvalidaError);
  });
});