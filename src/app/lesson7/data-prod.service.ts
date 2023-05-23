import { Injectable } from '@angular/core';
import { Product } from '../types/product/product.type';

@Injectable({
  providedIn: 'root',
})
export class DataProdService {
  private products: Product[] = [
    {
      id: 1,
      image:
        'https://content.silpo.ua/sku/ecommerce/3/480x480wwm/32485_480x480wwm_4dce5b2b-3e84-0150-bcf8-8a04b7a92fc2.png',
      name: 'Банан',
      price: 50.39,
      description: 'Банан стиглий',
    },
    {
      id: 2,
      image:
        'https://content.silpo.ua/sku/ecommerce/55/480x480wwm/557841_480x480wwm_0fc3e78f-ee61-143a-1d89-2e1db2a0e9dd.png',
      name: 'Груша',
      price: 95.2,
      description: 'Груша стигла',
    },
    {
      id: 3,
      image:
        'https://content.silpo.ua/sku/ecommerce/83/480x480wwm/838137_480x480wwm_e5057a54-2675-b461-458e-0d130da49ae1.png',
      name: 'Авокадо Хасс',
      price: 33.99,
      description: 'Авокадо стигле',
    },
    {
      id: 4,
      image:
        'https://content.silpo.ua/sku/ecommerce/77/480x480wwm/770236_480x480wwm_5641fe89-eb54-66f3-9edc-00bf42510b22.png',
      name: 'Кокос',
      price: 119.0,
      description: 'Кокос стиглий',
    },
    {
      id: 5,
      image:
        'https://content.silpo.ua/sku/ecommerce/3/480x480wwm/34604_480x480wwm_bf6546c6-5a54-82ae-d69f-c3006dda8661.png',
      name: 'Ананас',
      price: 169.0,
      description: 'Ананас стиглий',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    const item = this.products.find(product => product.id === id);
    if (item) {
      return item;
    }
    return {
      image: '',
      name: '',
      price: 0.0,
      description: '',
    };
  }
}
