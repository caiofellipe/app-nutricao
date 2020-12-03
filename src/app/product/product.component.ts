import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedProduct?: Product;
  product?: Product[];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();

  }
  onSelect(product: Product):void{
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }

  getProducts():void{
    this.product = this.ProductService.getProducts();
  }
}
