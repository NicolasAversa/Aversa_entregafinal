import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products;
  constructor(private productsServ: ProductsService) {
    this.productsServ.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  handleDelete(index) {
    this.products.splice(index, 1);
  }

  ngOnInit(): void {}
}
