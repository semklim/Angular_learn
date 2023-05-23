import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product/product.type';
import { SaveIdProductService } from '../save-id-pruct.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.css'],
  providers: [],
})
export class ProdCardComponent implements OnInit {
  product!: Product;

  constructor(private productData: SaveIdProductService) {}

  ngOnInit() {
    const { item } = this.productData;
    if (item) {
      this.product = item;
    }
  }
}
