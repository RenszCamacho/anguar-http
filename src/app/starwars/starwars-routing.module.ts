import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsComponent } from './starwars.component';

const routes: Routes = [
  {path: '', component: StarwarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
