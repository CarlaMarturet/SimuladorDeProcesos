export class Proceso {
  constructor(
    readonly pid: number,
    readonly memoriaRequerida: number,
    readonly cpuTotal: number
  ) {}
}