import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  @Input() imgWidth = 300;
  @Input() imgHeight = 300;
  @Input() imgSrc = '';
}
