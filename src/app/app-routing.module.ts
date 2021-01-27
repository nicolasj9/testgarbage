import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpusComponent } from "./corpus/corpus.component";

const routes: Routes = [
  { path: '', component: CorpusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
