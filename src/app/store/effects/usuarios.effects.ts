import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        public usuarioServices: UsuarioService
    ) {}

    @Effect()
    cargarUsuarios$ = this.actions$
        .pipe(
            ofType(usuariosActions.CARGAR_USUARIOS),
            switchMap( () => {
                return this.usuarioServices.getUsers()
                .pipe(
                    map( users => new usuariosActions.CargarUsuariosSuccess(users)),
                    catchError( err => of(new usuariosActions.CargarUsuariosFail(err)))
                );
            })
        );
}

