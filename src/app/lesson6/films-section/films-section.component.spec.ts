import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSectionComponent } from './films-section.component';

describe('FilmsSectionComponent', () => {
  let component: FilmsSectionComponent;
  let fixture: ComponentFixture<FilmsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
