import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Task1Component } from './task1.component';

describe('Task1Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Task1Component],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Task1Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'AngularLesson'", () => {
    const fixture = TestBed.createComponent(Task1Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularLesson');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Task1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularLesson app is running!');
  });
});
