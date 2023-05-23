import { Injectable } from '@angular/core';
import { DataProdService } from './data-prod.service';

@Injectable({
  providedIn: 'root',
})
export class SaveIdProductService {
  private productId: number | null = null;

  constructor(private productData: DataProdService) {}

  get item() {
    if (this.productId) {
      return this.productData.getProductById(this.productId);
    }
    return null;
  }

  set idItem(value: number) {
    this.productId = value;
  }
}
