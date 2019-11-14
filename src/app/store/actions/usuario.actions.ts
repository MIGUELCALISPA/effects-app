import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.models';
import { usuariosAcciones } from './usuarios.actions';


export const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar usuario SUCESS';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    constructor( public id: string ) {}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    constructor( public payload: any ) {}
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor( public usuario: Usuario ) {}
}

export type usuarioAcciones = CargarUsuario |
                                CargarUsuarioFail |
                                CargarUsuarioSuccess;


