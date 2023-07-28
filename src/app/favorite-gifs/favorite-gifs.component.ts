import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-gifs',
  templateUrl: './favorite-gifs.component.html',
  styleUrls: ['./favorite-gifs.component.scss']
})
export class FavoriteGifsComponent implements OnInit {
  favoriteGifs:Array<string> = [];
  

  ngOnInit(): void {
    this.getFavorites()
  }

  getFavorites() {
    let favGifs = localStorage.getItem('gifs');
    this.favoriteGifs = favGifs !== null ? JSON.parse(favGifs) : [];
    console.log(this.favoriteGifs);
  }
}
