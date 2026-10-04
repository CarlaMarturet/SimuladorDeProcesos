import { describe, it, expect } from 'vitest';
import { ConfiguracionSimulacion } from '../ConfiguracionSimulacion';
import { Simulador } from '../Simulador';   

describe('RF01 - Simulador inicial', () => {
  it('inicia en tick 0', () => {
    const simulador = new Simulador(new ConfiguracionSimulacion(1024, 2));
    expect(simulador.tickActual).toBe(0);
  });

    it('inicia con la CPU libre y las colas vacías', () => {
    const simulador = new Simulador(new ConfiguracionSimulacion(1024, 2));
    expect(simulador.procesoEnCpu).toBeNull();
    expect(simulador.pidsListos).toEqual([]);
    expect(simulador.pidsEsperandoMemoria).toEqual([]);
    expect(simulador.pidsBloqueados).toEqual([]);
    expect(simulador.pidsTerminados).toEqual([]);
  });

    it('inicia con bloque libre del tamaño de la memoria configurada', () => {
    const simulador = new Simulador(new ConfiguracionSimulacion(2048, 4));
    expect(simulador.mapaMemoria).toHaveLength(1);
    expect(simulador.mapaMemoria[0].inicio).toBe(0);
    expect(simulador.mapaMemoria[0].tamanio).toBe(2048);
    expect(simulador.mapaMemoria[0].estaLibre).toBe(true);
  });
});