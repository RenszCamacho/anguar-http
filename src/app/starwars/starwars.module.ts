import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StarwarsRoutingModule } from './starwars-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StarwarsRoutingModule,
    HttpClientModule
  ]
})
export class StarwarsModule { }
