import { describe, it, expect } from 'vitest';
import { BloqueMemoria } from '../src/BloqueMemoria';

describe(' RF01-BloqueMemoria', () => {
  it('guarda inicio y tamaño', () => {

    const bloque = new BloqueMemoria(100, 50);
    expect(bloque.inicio).toBe(100);
    expect(bloque.tamanio).toBe(50);
  });

    it('un bloque nuevo está libre por defecto', () => {
    const bloque = new BloqueMemoria(0, 1024);
    expect(bloque.estaLibre).toBe(true);
  });

    it('un bloque está ocupado', () => {
    const bloque = new BloqueMemoria(0, 200, 7);
    expect(bloque.estaLibre).toBe(false);
    expect(bloque.pidAsignado).toBe(7);
  });

  it('calcula la dirección final como inicio más tamaño', () => {
    const bloque = new BloqueMemoria(100, 50);
    expect(bloque.fin).toBe(150);
  });

});