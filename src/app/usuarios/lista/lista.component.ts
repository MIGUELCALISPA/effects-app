import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( public usuarioServices: UsuarioService) { }

  ngOnInit() {

    this.usuarioServices.getUsers().subscribe(
      users => {
        this.usuarios = users;
      }
    );
  }

}
