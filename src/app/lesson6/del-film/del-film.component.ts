import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmsDataService } from '../films/films-data.service';

@Component({
  selector: 'app-del-film',
  templateUrl: './del-film.component.html',
  styleUrls: ['./del-film.component.css'],
})
export class DelFilmComponent implements OnInit {
  delForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private filmsData: FilmsDataService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.delForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.delForm.invalid) {
      return;
    }
    this.filmsData.remove(this.delForm.value.title);
    this.delForm.reset();
  }
}
