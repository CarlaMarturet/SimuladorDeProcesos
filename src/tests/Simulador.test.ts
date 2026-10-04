import { describe, it, expect } from 'vitest';
import { ConfiguracionSimulacion } from '../ConfiguracionSimulacion';
import { Simulador } from '../Simulador';

describe('RF01 - Simulador inicial', () => {
  it('inicia en tick 0', () => {
    const simulador = new Simulador(new ConfiguracionSimulacion(1024, 2));
    expect(simulador.tickActual).toBe(0);
  });
});