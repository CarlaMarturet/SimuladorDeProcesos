import { describe, it, expect } from 'vitest';
import { GestorMemoria } from '../GestorDeMemoria';
import { BloqueMemoria } from '../BloqueMemoria';

describe('RF01 - GestorMemoria', () => {
  it('arranca con un único bloque libre que abarca toda la memoria', () => {
    const bloques = new GestorMemoria(1024).obtenerBloques();
    expect(bloques).toHaveLength(1);
    expect(bloques[0].inicio).toBe(0);
    expect(bloques[0].tamanio).toBe(1024);
    expect(bloques[0].estaLibre).toBe(true);
  });

    it('protege el estado interno: modificar el resultado no afecta al gestor', () => {
    const gestor = new GestorMemoria(1024);
    const bloques = gestor.obtenerBloques() as BloqueMemoria[];
    bloques.pop();
    expect(gestor.obtenerBloques()).toHaveLength(1);
  });
});