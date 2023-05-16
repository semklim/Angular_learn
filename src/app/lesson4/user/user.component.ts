import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  _AvatarWidth = 300;
  _AvatarHeight = 300;
  AvatarSrc = 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg';

  set AvatarWidth(value: number){
    this.refreshWinSize();
    const percent = this.percentage(value, this.screenWidth);
    if(percent > 75){
      // this.AvatarWidth = Math.round(this.screenWidth * 0.75);
    }else{
      this._AvatarWidth = value;
    }
  }
  set AvatarHeight(value: number){
    this.refreshWinSize();
    const percent = this.percentage(value, this.screenHeight);
    if(percent > 75){
      // this.AvatarHeight = Math.round(this.screenHeight * 0.75);
    }else{
      this._AvatarHeight = value;
    }
  }

  get AvatarWidth(){
   return this._AvatarWidth;
  }
  get AvatarHeight(){
   return this._AvatarHeight;
  }

  percentage(partialValue: number, totalValue: number): number {
    return (100 * partialValue) / totalValue;
 } 

 refreshWinSize() {
  this.screenWidth = window.innerWidth;
  this.screenHeight = window.innerHeight;
 }
}
