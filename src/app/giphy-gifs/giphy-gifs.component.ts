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
  liked: boolean = false;
  favoriteGifs:Array<string> = [];
  
  constructor(private giphyService: GiphyApiService) {
    console.log(this.favoriteGifs);
  }

  onSearchGif(event: string) {
    this.giphySearch = event;
    this.giphyService.getGifs(this.giphySearch).subscribe(resp => {
      this.loadedGifs = resp;
      console.log(this.loadedGifs);
    });
  }

  setToFavorite(index:number) {
    this.loadedGifs[index].liked = !this.loadedGifs[index].liked
    this.favoriteGifs.push(this.loadedGifs[index].images.fixed_height.url)
    console.log(this.favoriteGifs);
    localStorage.setItem(`gifs`, JSON.stringify(this.favoriteGifs));
  }
}
