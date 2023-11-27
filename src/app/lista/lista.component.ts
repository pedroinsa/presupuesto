import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from '../services/presupuesto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {
  suscripcion: Subscription
  gastos: any[]
  presupuesto: number;
  restante: number;
  constructor(private service: PresupuestoService) {
    this.suscripcion = this.service.getGasto().subscribe(data => {
      this.gastos.push(data)
      this.restante = this.restante - data.cantidad
    })

    this.presupuesto = 0
    this.restante = 0
    this.gastos = []
  }
  ngOnInit(): void {
    this.presupuesto = this.service.cantidadPresupuesto
    this.restante = this.service.cantidadRestante
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  color() {
    if (this.restante > this.presupuesto / 2) {
      return 'alert alert-secondary'
    } else if (this.restante > this.presupuesto / 4) {
      return 'alert alert-warning'
    } else {
      return 'alert alert-danger'
    }
  }


}
