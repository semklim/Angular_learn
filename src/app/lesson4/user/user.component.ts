import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  screenWidth = window.innerWidth;

  screenHeight = window.innerHeight;

  imgWidth = 300;

  imgHeight = 300;

  AvatarSrc = 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg';

  set AvatarWidth(value: number) {
    this.refreshWinSize();
    const percent = this.percentage(value, this.screenWidth);
    if (percent >= 75) {
      // this.AvatarWidth = Math.round(this.screenWidth * 0.75);
    } else {
      this.imgWidth = value;
    }
  }

  get AvatarWidth() {
    return this.imgWidth;
  }

  set AvatarHeight(value: number) {
    this.refreshWinSize();
    const percent = this.percentage(value, this.screenHeight);
    if (percent >= 75) {
      // this.AvatarHeight = Math.round(this.screenHeight * 0.75);
    } else {
      this.imgHeight = value;
    }
  }

  get AvatarHeight() {
    return this.imgHeight;
  }

  percentage = (partialValue: number, totalValue: number): number => (100 * partialValue) / totalValue;

  refreshWinSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
