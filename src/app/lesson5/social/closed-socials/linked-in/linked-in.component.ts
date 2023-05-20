import { Component, Input } from '@angular/core';

export type ImgStyle = {
  width: number | string;
  height: number | string;
};
@Component({
  selector: 'app-linked-in',
  templateUrl: './linked-in.component.html',
  styleUrls: ['./linked-in.component.css'],
})
export class LinkedInComponent {
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

  readonly styleName = 'linkedInStyle';
}
