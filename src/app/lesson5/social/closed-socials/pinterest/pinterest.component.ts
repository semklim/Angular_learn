import { Component, Input } from '@angular/core';
import { ImgStyle } from '../linked-in/linked-in.component';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css'],
})
export class PinterestComponent {
  count = 0;

  defStyle: ImgStyle = {
    width: 0,
    height: 0,
  };

  @Input() set imgStyle(value: ImgStyle) {
    this.defStyle = value;
  }

  get imgStyle(): ImgStyle {
    return {
      width: `${this.defStyle.width}px`,
      height: `${this.defStyle.height}px`,
    };
  }

  readonly styleName = 'pinterestStyle';
}
