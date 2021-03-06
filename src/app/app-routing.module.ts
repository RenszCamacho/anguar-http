import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: 'starwars',
    loadChildren: () => import('./starwars/starwars.module').then(m => m.StarwarsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
