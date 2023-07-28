import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs'
import { GifResponse } from './gif-response.model';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {
  constructor(private http: HttpClient) { }

  getGifs(searchTerm:string) {
    return this.http.get<GifResponse>(
      `https://api.giphy.com/v1/gifs/search?api_key=4YSxs3FFrAtwGRle647O0hdTQl7m0Lom&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      ).pipe(map((gifsArray) => {
        return gifsArray.data;
      }
      ))
  }
}
