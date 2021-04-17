import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';
  _http: Http;

  constructor(http: Http) {
    this._http = http;
   }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
            .map(x => x.json());
            //.map(x => console.log(x));
            //.subscribe(data => console.log(data));;
  }

}
