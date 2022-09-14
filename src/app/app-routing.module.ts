import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiliereComponent } from './filiere/filiere.component';

const routes: Routes = [
  {path : "filieres/liste", component : FiliereComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
