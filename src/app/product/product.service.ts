import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { PRODUCTS } from './product-view.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }


  getProducts(): Product[]{
    return PRODUCTS;
  }

}
