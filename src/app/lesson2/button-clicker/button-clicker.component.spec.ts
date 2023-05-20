import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClickerComponent } from './button-clicker.component';

describe('ButtonClickerComponent', () => {
  let component: ButtonClickerComponent;
  let fixture: ComponentFixture<ButtonClickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonClickerComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
