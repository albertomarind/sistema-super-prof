import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  users: User[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    let obs$: Observable<User[]> = this.usuarioService.getUsers();
    obs$.subscribe(
      {
        next: (response: User[]) => {
          this.users = response;
        },
        error: () => {

        },
        complete: () => {

        }
      }
    )
  }

}
