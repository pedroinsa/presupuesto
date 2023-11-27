import { Component } from '@angular/core';
import { PresupuestoService } from '../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  formularioExceso: boolean;


  constructor(private service: PresupuestoService, private route: Router) {
    this.nombreGasto = ""
    this.cantidad = 0
    this.formularioIncorrecto = false
    this.formularioExceso = false

  }
  agregarGasto() {
    if (this.cantidad <= 0 || this.nombreGasto === "") {
      this.formularioIncorrecto = true
      this.formularioExceso = false
    } else if (this.cantidad > this.service.cantidadRestante) {
      this.formularioExceso = true
      this.formularioIncorrecto = false
    } else {
      const GASTOS = { nombre: this.nombreGasto, cantidad: this.cantidad }
      this.service.agregarGasto(GASTOS)
      this.nombreGasto = ""
      this.cantidad = 0
      this.formularioIncorrecto = false
      this.formularioExceso = false
    }

  }
  volver() {
    this.route.navigate(['/ingresa-gasto'])
  }
}
