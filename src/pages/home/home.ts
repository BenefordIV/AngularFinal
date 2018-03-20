import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimeProvider } from '../../providers/anime/anime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

anime:any;

  constructor(public navCtrl: NavController, public animeProvider:AnimeProvider) {
    animeProvider.getData().subscribe(data => this.anime = JSON.stringify(data));
  }

}
