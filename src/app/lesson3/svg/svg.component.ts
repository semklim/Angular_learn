import { Component } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent {
  r = '100';
  tCenter = '150';
  circleColor = '#0e0ead';
  bgColor = 'hsl(270 50% 13%)';
  opacity = false;
  countBgChange = 0;
  countOpacityChange = 0;


  randomHsl(): string{
    return 'hsla(' + Math.floor(Math.random() * 360) + ', 80%, 30%)';
  }

  resizeCircle(event: WheelEvent): void{
    event.preventDefault();
    if(event.deltaY > 0){
      this.r = (Number(this.r) + 10).toString();
    }else{
      this.r = (Number(this.r) - 10).toString();
    }

    if(+this.r > 250){
      this.r = '250';
    }else if(+this.r <= 20){
      this.r = '20';
    }

    this.tCenter = `${500 - Number(this.r) - 250}`;
  }
  changeOpacity(event: Event): Boolean{
    event.stopPropagation();
    this.countOpacityChange += 1;
    return this.opacity = this.opacity ? false : true;
  }
  changeSvgBg(event: MouseEvent): void{
    event.preventDefault();
    this.countBgChange += 1;
    this.bgColor = this.randomHsl();

  }
}
