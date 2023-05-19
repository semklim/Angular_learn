import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent {
  movieForm!: FormGroup;
  URL_REGEXP = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      genre: [''],
      releaseDate: [''],
      image: ['', [Validators.required, Validators.pattern(this.URL_REGEXP)]]
    });
  }

  onSubmit() {
    if (this.movieForm.invalid) {
      return;
    }

    const movieData = this.movieForm.value;
    console.log(movieData);
    this.movieForm.reset();
  }
}
