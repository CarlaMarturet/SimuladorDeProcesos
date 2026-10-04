import { describe, it, expect } from 'vitest';
import { Proceso } from '../Proceso';

describe('RF02 - Proceso', () => {
  it('guarda pid, memoria requerida y tiempo total de CPU', () => {
    const proceso = new Proceso(1, 200, 5);
    expect(proceso.pid).toBe(1);
    expect(proceso.memoriaRequerida).toBe(200);
    expect(proceso.cpuTotal).toBe(5);
  });

});