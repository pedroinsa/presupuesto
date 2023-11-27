import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  error: boolean
  cantidad: number
  constructor(private route: Router, private service: PresupuestoService) {
    this.error = false
    this.cantidad = 0

  }

  agregarPresupuesto() {
    if (this.cantidad > 0) {
      this.error = false
      this.service.cantidadPresupuesto = this.cantidad
      this.service.cantidadRestante = this.cantidad
      this.route.navigate(['/menu-gastos'])

    } else {
      this.error = true

    }



  }

}
