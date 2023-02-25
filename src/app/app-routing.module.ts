import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // parte gestita da Angular

// variabile delle "pagine" da gestire; array di oggetti che contengono i percorsi (path) dei componenti-pagine
const routes: Routes = [
];

@NgModule({ // oggetto del decoratore
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
