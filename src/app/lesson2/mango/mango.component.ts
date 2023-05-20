import { Component } from '@angular/core';

@Component({
  selector: 'app-mango',
  templateUrl: './mango.component.html',
  styleUrls: ['./mango.component.css'],
})
export class MangoComponent {
  radius = 0;

  id!: ReturnType<typeof setTimeout>;

  async DoThis({ target }: Event) {
    const el = target as HTMLImageElement;
    clearTimeout(this.id);

    if (this.radius < el.width / 2) {
      this.radius += 1;
      el.setAttribute('style', `--radius: ${this.radius}px;`);
    }
    this.id = setTimeout(() => {
      this.radius = 0;
      el.setAttribute('style', `--radius: ${this.radius}px;`);
    }, 3000);
  }
}
