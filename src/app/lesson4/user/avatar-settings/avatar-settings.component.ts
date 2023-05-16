import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-avatar-settings',
  templateUrl: './avatar-settings.component.html',
  styleUrls: ['./avatar-settings.component.css']
})
export class AvatarSettingsComponent {

  @Output() imgWidthChange = new EventEmitter<number>();
  @Output() imgHeightChange = new EventEmitter<number>();
  @Input() imgWidth = 300;
  @Input() imgHeight = 300;

  onChangeWidth(el: HTMLInputElement, valueDisplay: HTMLDivElement){
    this.setValue(el,valueDisplay);
    this.imgWidthChange.emit(this.imgWidth);
  }
  
  onChangeHeight(el: HTMLInputElement, valueDisplay: HTMLDivElement){
    this.setValue(el,valueDisplay);
    this.imgHeightChange.emit(this.imgHeight);
  }

  setValue = (range: HTMLInputElement, rangeV: HTMLDivElement)=>{
		const
      //@ts-ignore
			newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
			newPosition = 10 - (newValue * 0.2);
      rangeV.firstElementChild!.textContent = `${range.value}`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	};

}