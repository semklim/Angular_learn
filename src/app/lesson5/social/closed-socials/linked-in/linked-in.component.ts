import { Component, Input } from '@angular/core';

export type imgStyle ={
  width: number | string;
  height: number | string;
}
@Component({
  selector: 'app-linked-in',
  templateUrl: './linked-in.component.html',
  styleUrls: ['./linked-in.component.css']
})
export class LinkedInComponent {
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

  readonly styleName = 'linkedInStyle';
}
