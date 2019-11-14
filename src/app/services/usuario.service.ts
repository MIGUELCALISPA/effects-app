import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url = 'https://reqres.in/api';

  constructor( private http: HttpClient) { }

  getUsers()  {
    return this.http.get(`${ this.url }/users?per_page=10&delay=3`)
    .pipe(
      map( resp => {
        return resp['data'];
      })
    );
  }

  getUserById(id: string) {

    return this.http.get(`${ this.url }/users/${ id }`)
    .pipe(
      map( resp => {
        return resp['data'];
      })
    );

  }
}
