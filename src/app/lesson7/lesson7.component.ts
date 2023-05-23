import { Component } from '@angular/core';
import { DataProdService } from './data-prod.service';
import { SaveIdProductService } from './save-id-pruct.service';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css'],
  providers: [DataProdService],
})
export class Lesson7Component {
  constructor(public products: DataProdService, private saveId: SaveIdProductService) {}

  fireIdProduct(id: number) {
    this.saveId.idItem = id;
  }
}
