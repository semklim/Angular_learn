import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedSocialsComponent } from './closed-socials.component';

describe('ClosedSocialsComponent', () => {
  let component: ClosedSocialsComponent;
  let fixture: ComponentFixture<ClosedSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClosedSocialsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClosedSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
