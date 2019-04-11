import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent} from './components/contacto/contacto.component';
import{InicioComponent} from'./components/inicio/inicio.component' ;
import{DamasComponent} from'./components/damas/damas.component' ;
import{CaballerosComponent} from'./components/caballeros/caballeros.component';
import {ProductsComponent} from './components/products/products.component';
  


const routes: Routes = [ 
  { path: 'inicio', component: InicioComponent},
  { path: 'contacto', component:ContactoComponent},
  {path: 'damas', component:DamasComponent},
  {path: 'caballeros', component:CaballerosComponent},
  {path:'products', component:ProductsComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
