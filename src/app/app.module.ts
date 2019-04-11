import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


//COMPONENTS
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import {ProductComponent} from './components/products/product/product.component';

//SERVICES
import { ProductService} from './services/product.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListComponent } from './components/alumnos/alumnos-list/alumnos-list.component';
import { AlumnoComponent } from './components/alumnos/alumno/alumno.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SliderComponent } from './components/slider/slider.component';
import { DamasComponent} from'./components/damas/damas.component';
import { CaballerosComponent } from './components/caballeros/caballeros.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosListComponent,
    AlumnoComponent,
    ContactoComponent,
    InicioComponent,
    SliderComponent,
    DamasComponent,
    CaballerosComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp (environment.firebase),
    AngularFireDatabaseModule,
    FormsModule


  ],

  providers: [

    ProductService
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
