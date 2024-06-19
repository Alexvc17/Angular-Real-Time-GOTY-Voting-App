import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  juegos: any[] = []

  constructor(private db: AngularFirestore){

  }

  ngOnInit(): void {

    //para ver cambios en tiempo real
    this.db.collection('goty').valueChanges()
    //para extraer la informacion necesaria usamos un pipe y pasarlo por operador map
        .pipe(
          //hago una desutructuracion obteniendo solo el name y los votos luego retorno un muevo objeto q tiene name y value
          map((resp: any[]) => resp.map(({name, votos}) => ({name, value: votos})) )
          // return resp.map(juego => {
          //   return{
          //     name: juego.name,
          //     value: juego.votos
          //   }
          // })

        )
        .subscribe(juegos=>{
          //console.log("viene desde angular fire");
          //console.log(resp);
          this.juegos = juegos;
        })

  }

}
