import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-settings',
  templateUrl: './avatar-settings.component.html',
  styleUrls: ['./avatar-settings.component.css'],
})
export class AvatarSettingsComponent {
  @Output() imgWidthChange = new EventEmitter<number>();

  @Output() imgHeightChange = new EventEmitter<number>();

  @Input() imgWidth = 300;

  @Input() imgHeight = 300;

  @Input() dataFromUser!: {
    AvatarWidth: number;
    AvatarHeight: number;
  };

  refreshInputPosition(el: HTMLInputElement, valueDisplay: HTMLDivElement) {
    if (this.imgWidth > this.dataFromUser.AvatarWidth) {
      this.imgWidth = this.dataFromUser.AvatarWidth;
      this.setValue(el, valueDisplay, this.imgWidth);
    }
    if (this.imgHeight > this.dataFromUser.AvatarHeight) {
      this.imgHeight = this.dataFromUser.AvatarHeight;
      this.setValue(el, valueDisplay, this.imgHeight);
    }
  }

  onChangeWidth(el: HTMLInputElement, valueDisplay: HTMLDivElement) {
    this.setValue(el, valueDisplay);
    this.imgWidthChange.emit(this.imgWidth);
  }

  onChangeHeight(el: HTMLInputElement, valueDisplay: HTMLDivElement) {
    this.setValue(el, valueDisplay);
    this.imgHeightChange.emit(this.imgHeight);
  }

  setValue = (range: HTMLInputElement, rangeV: HTMLDivElement, correctData?: number) => {
    const rangeValue = correctData || range.value;
    const newValue = Number((+rangeValue - +range.min) * 100) / (+range.max - +range.min);
    const newPosition = 10 - newValue * 0.2;
    if (rangeV.firstElementChild) {
      rangeV.firstElementChild.textContent = `${rangeValue}`;
    }
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
}
