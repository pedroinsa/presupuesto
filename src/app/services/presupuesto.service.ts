import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  cantidadPresupuesto: number
  cantidadRestante: number

  private gastos$ = new Subject<any>

  constructor() {
    this.cantidadPresupuesto = 0
    this.cantidadRestante = 0

  }

  agregarGasto(gasto: any) {
    this.cantidadRestante = this.cantidadRestante - gasto.cantidad
    this.gastos$.next(gasto)
  }
  getGasto(): Observable<any> {
        return this.gastos$.asObservable()
  }
}
