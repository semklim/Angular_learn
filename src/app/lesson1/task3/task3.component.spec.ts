import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from './task3.component';

describe('User', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [User],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'AngularLesson'", () => {
    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularLesson');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(User);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularLesson app is running!');
  });
});
