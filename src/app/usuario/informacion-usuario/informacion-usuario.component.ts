import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion-usuario.component.html',
  styleUrls: ['./informacion-usuario.component.scss']
})
export class InformacionUsuarioComponent implements OnInit {

  user: User | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    console.log('Entre');
    let paramMap: ParamMap = this.activatedRoute.snapshot.paramMap;
    let idUsuario: number = Number(paramMap.get('id'));
    this.usuarioService.findUserById(idUsuario).subscribe(
      {
        next: (user: User) => {
          this.user = user;
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
        }
      }
    )


  }

}
