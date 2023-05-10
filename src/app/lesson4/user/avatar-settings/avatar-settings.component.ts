import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
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

  onChangeWidth(){
    this.imgWidthChange.emit(this.imgWidth);
  }
  
  onChangeHeight(){
    this.imgHeightChange.emit(this.imgHeight);
  }
}