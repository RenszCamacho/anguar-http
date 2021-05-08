import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],
})
export class StarwarsComponent implements OnInit {
  url = 'https://swapi.dev/api/people';
  starwarsList: any = [];
  constructor(public http: HttpService, public storeSrv: StorageService) {}

  ngOnInit(): void {
    const starwarsListStore = this.storeSrv.get('starwarsList');
    if (starwarsListStore) {
      this.starwarsList = starwarsListStore;
    } else {
      this.http.getData(this.url).subscribe((data: any) => {
        this.starwarsList = data['results'];
        console.log(this.starwarsList);
        this.storeSrv.set('starwarsList', this.starwarsList);
      });
    }
  }
}
