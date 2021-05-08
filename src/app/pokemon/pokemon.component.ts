import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  url = 'https://pokeapi.co/api/v2/pokemon';
  pokeList: any = [];
  constructor(public http: HttpService, public storeSrv: StorageService) {}

  ngOnInit(): void {
    const pokeListStore = this.storeSrv.get('pokeList');
    if (pokeListStore) {
      this.pokeList = pokeListStore;
    } else {
      this.http.getData(this.url).subscribe((res: any) => {
        this.pokeList = res['results'];
        this.storeSrv.set('pokeList', this.pokeList);
      });
    }
  }
}
