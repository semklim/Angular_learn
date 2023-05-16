import { Component, Input } from '@angular/core';
import { imgStyle } from '../linked-in/linked-in.component';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  count = 0;
  _imgStyle: imgStyle = {
    width: 0,
    height: 0,
  };
  @Input() set imgStyle(value: imgStyle) {
    this._imgStyle = value;
  };

  get imgStyle(): imgStyle {
    return {
      width: `${this._imgStyle.width}px`,
      height: `${this._imgStyle.height}px`,
    }
  }

  readonly styleName = 'pinterestStyle';
}
