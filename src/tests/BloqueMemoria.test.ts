import { describe, it, expect } from 'vitest';
import { BloqueMemoria } from '../BloqueMemoria';

describe(' RF01-BloqueMemoria', () => {
  it('guarda inicio y tamaño', () => {

    const bloque = new BloqueMemoria(100, 50);
    expect(bloque.inicio).toBe(100);
    expect(bloque.tamanio).toBe(50);
  });
});