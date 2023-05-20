import { Component, Input } from '@angular/core';
import { ImgStyle } from '../linked-in/linked-in.component';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
})
export class TwitterComponent {
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

  readonly styleName = 'twitterStyle';
}
