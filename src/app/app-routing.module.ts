import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './root/app.component';
import { ProdCardComponent } from './lesson7/prod-card/prod-card.component';
import { Lesson7Component } from './lesson7/lesson7.component';

const routes: Routes = [
  { path: '', component: Lesson7Component },
  { path: 'products', component: ProdCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
