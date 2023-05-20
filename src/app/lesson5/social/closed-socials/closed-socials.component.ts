import { Component } from '@angular/core';
import { PinterestComponent } from './pinterest/pinterest.component';

export type ImgSize = {
  width: number;
  height: number;
};
@Component({
  selector: 'app-closed-socials',
  templateUrl: './closed-socials.component.html',
  styleUrls: ['./closed-socials.component.css'],
})
export class ClosedSocialsComponent {
  pinterestStyle: ImgSize = {
    width: 50,
    height: 50,
  };

  onImgClick = (el: PinterestComponent) => {
    const name = el.styleName;
    this[name].width += 1;
    this[name].height += 1;
  };
}
