import { Component, ViewChild } from '@angular/core';
import { imgSize } from '../social/closed-socials/closed-socials.component';
import { LinkedInComponent } from '../social/closed-socials/linked-in/linked-in.component';
import { TwitterComponent } from '../social/closed-socials/twitter/twitter.component';

interface OverloadMeth {
  (el: TwitterComponent): void;
  (el: LinkedInComponent): void;
}

@Component({
  selector: 'app-opened-socials',
  templateUrl: './opened-socials.component.html',
  styleUrls: ['./opened-socials.component.css'],
})
export class OpenedSocialsComponent {
  @ViewChild('linked') linkedIn!: LinkedInComponent;

  @ViewChild('twitter') twitter!: TwitterComponent;

  totalCount = 0;

  twitterStyle: imgSize = {
    width: 50,
    height: 50,
  };

  linkedInStyle: imgSize = {
    width: 50,
    height: 50,
  };

  onImgClick: OverloadMeth = (el) => {
    const name = el.styleName;
    this[name].width += 1;
    this[name].height += 1;
    this.totalCount = this.linkedIn.count + this.twitter.count;
  };
}
