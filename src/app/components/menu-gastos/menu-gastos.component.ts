import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-menu-gastos',
  templateUrl: './menu-gastos.component.html',
  styleUrls: ['./menu-gastos.component.css']
})
export class MenuGastosComponent implements OnInit {


  constructor(private service: PresupuestoService, private route: Router) {

  }
  ngOnInit(): void {
    if(this.service.cantidadPresupuesto === 0){
      this.route.navigate(['/ingresar-gastos'])
    }
    
  }


}
