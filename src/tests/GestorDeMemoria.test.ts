import { describe, it, expect } from 'vitest';
import { GestorMemoria } from '../GestorDeMemoria';

describe('RF01 - GestorMemoria', () => {
  it('arranca con un único bloque libre que abarca toda la memoria', () => {
    const bloques = new GestorMemoria(1024).obtenerBloques();
    expect(bloques).toHaveLength(1);
    expect(bloques[0].inicio).toBe(0);
    expect(bloques[0].tamanio).toBe(1024);
    expect(bloques[0].estaLibre).toBe(true);
  });
});