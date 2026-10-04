
import { describe, it, expect } from 'vitest';
import { ConfiguracionSimulacion } from '../ConfiguracionSimulacion';

describe('RF01 - ConfiguracionSimulacion', () => {
  it('usa 1024 KB y quantum 2 por defecto', () => {

    const c = new ConfiguracionSimulacion(1024, 2);

    expect(c.memoriaTotal).toBe(1024);
    expect(c.quantum).toBe(2);
  });
});