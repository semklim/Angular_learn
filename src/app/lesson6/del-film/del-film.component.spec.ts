import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelFilmComponent } from './del-film.component';

describe('DelFilmComponent', () => {
  let component: DelFilmComponent;
  let fixture: ComponentFixture<DelFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelFilmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DelFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
