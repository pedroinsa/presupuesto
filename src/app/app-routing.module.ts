import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGastosComponent } from './components/menu-gastos/menu-gastos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: 'ingresar-gastos', component: HomeComponent },
  { path: '', redirectTo: '/ingresar-gastos', pathMatch: 'full' },
  { path: 'menu-gastos', component: MenuGastosComponent },
  { path: '**', redirectTo: 'ingresar-gastos' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
