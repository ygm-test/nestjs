import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(name: string, desc: string) {
    const prodId = Math.random().toString();
    const newProduct = new Product(name, desc, prodId);
    this.products.push(newProduct);
    return prodId;
  }
}

