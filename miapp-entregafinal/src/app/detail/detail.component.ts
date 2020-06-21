import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: string = '';
  product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsServ: ProductsService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productsServ.getSingleProduct(this.id).subscribe((data) => {
      this.product = data;
    });
  }

  ngOnInit(): void {}
}
