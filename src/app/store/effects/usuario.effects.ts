import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuarioServices: UsuarioService
    ) {}

    @Effect()
    cargarUsuario$ = this.actions$
        .pipe(
            ofType(usuarioActions.CARGAR_USUARIO),
            switchMap( action => {

                const id = action['id'];
                return this.usuarioServices.getUserById(id)
                .pipe(
                    map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                    catchError( err => of(new usuarioActions.CargarUsuarioFail(err)))
                );
            })
        );
}

