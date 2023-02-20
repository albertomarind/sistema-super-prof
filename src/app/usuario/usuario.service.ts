import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn:'platform'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) {
    console.log('Se crea la instancia');
   }

  public findUserById(idUsuario: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.api}/users/${idUsuario}`);
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.api}/users`);
  }
}
