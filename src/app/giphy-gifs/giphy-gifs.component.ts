import { Component } from '@angular/core';
import { GiphyApiService } from '../giphy-api.service';
import { Gif } from '../gif.model';

@Component({
  selector: 'app-giphy-gifs',
  templateUrl: './giphy-gifs.component.html',
  styleUrls: ['./giphy-gifs.component.scss']
})
export class GiphyGifsComponent {
  giphySearch:string = '';
  linkGifs:string = '';
  loadedGifs:Array<Gif> = [];

  constructor(private giphyService: GiphyApiService) {}

  onSearchGif(event: string) {
    this.giphySearch = event;
    this.giphyService.getGifs(this.giphySearch).subscribe(resp => {
      this.loadedGifs = resp;
      console.log(this.loadedGifs);
    });
  }
}
