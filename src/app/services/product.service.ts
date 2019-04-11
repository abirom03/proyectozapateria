import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Product} from '../models/product';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductService {

   productList: AngularFireList<any>;
   selectedProduct: Product = new Product ();

  constructor   (private firebase: AngularFireDatabase ) { }


    getProducts()
    {
     return this.productList = this.firebase.list ('products');
    }



    insertProduct(product : Product)
    { 
        this.productList.push({

          nombre: product.nombre,
          categoria:product.categoria,
          talla: product.talla,
          precio: product.precio
        });
    }


    updateProduct(product: Product)

  {
    this.productList.update(product.$key, {
      nombre: product.nombre,
      categoria:product.categoria,
      talla: product.talla,
      precio: product.precio
    });
  }
  

deleteProduct($key : string) 
{
  this.productList.remove($key);
}

}
