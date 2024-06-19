import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Game } from '../interfaces/interfaces';
import { catchError, of, tap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];



  constructor(private http: HttpClient) { }

  getNominados(){

  if(this.juegos.length > 0){
    //Si el arreglo contiene datos entonces retorna los mismos juegos almacenados en cache
    console.log("Desde cache")
    return of(this.juegos);
  }else{

    console.log("Peticion HTTP se dispara 1na sola vez")
    //le decimos que regresa un arreglo de juegos
    return this.http.get<Game[]>(`${environment.url}/api/goty`)
    //va a regresar los juegos pero va a pasar por este pipe... que es un tap,
    //el cual dispara un efecto secundario que va a establecer mis juegos
    .pipe(
      tap(juegos => this.juegos = juegos)
      )

  }
  }


  votarJuego(id:string){


    return this.http.post(`${environment.url}/api/goty/${id}`,{})
    //pongo un pipe para atrapar errores
        .pipe(
          catchError(err => {

            console.log("Error en la peticion");
            return of(err.error)
          })
        )

  }



}
