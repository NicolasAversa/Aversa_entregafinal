import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get(
      'https://nicolasaversatest1.000webhostapp.com/wp-json/wp/v2/products'
    );
  }

  getSingleProduct(id) {
    return this.httpClient.get(
      'https://nicolasaversatest1.000webhostapp.com/wp-json/wp/v2/products/' +
        id
    );
  }
}
