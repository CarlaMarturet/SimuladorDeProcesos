import { describe, it, expect } from 'vitest';
import { Proceso } from '../src/Proceso';
import { ProcesoInvalidoError } from '../src/errores';

describe('RF02 - Proceso', () => {
  it('guarda pid, memoria requerida y tiempo total de CPU', () => {
    const proceso = new Proceso(1, 200, 5);
    expect(proceso.pid).toBe(1);
    expect(proceso.memoriaRequerida).toBe(200);
    expect(proceso.cpuTotal).toBe(5);
  });

    it.each([0, -1, 1.5, NaN, Infinity])('rechaza PID inválido: %p', valor => {
    expect(() => new Proceso(valor, 200, 5)).toThrow(ProcesoInvalidoError);
  });
    it.each([0, -1, 1.5, NaN, Infinity])('rechaza memoria requerida inválida: %p', valor => {
    expect(() => new Proceso(1, valor, 5)).toThrow(ProcesoInvalidoError);
  });
  
    it.each([0, -1, 1.5, NaN, Infinity])('rechaza tiempo de CPU inválido: %p', valor => {
    expect(() => new Proceso(1, 200, valor)).toThrow(ProcesoInvalidoError);
  });

});