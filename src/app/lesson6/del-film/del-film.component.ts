import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-del-film',
  templateUrl: './del-film.component.html',
  styleUrls: ['./del-film.component.css'],
})
export class DelFilmComponent implements OnInit {
  delForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.delForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    // if (this.delForm.invalid) {
    //   return;
    // }
    // const delData = this.delForm.value;
    // console.log(delData);
    // this.delForm.reset();
  }
}
