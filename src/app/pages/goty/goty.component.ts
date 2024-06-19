import { Component } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';

//Sweet alert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent {

  juegos: Game[] = [];

  constructor(private gameService: GameService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gameService.getNominados()
      .subscribe(games =>{
        console.log(games);
        this.juegos = games;
      })
  }

  votarJuego(id:string){


    this.gameService.votarJuego(id)
    .subscribe((resp:any) =>{

      if(resp.ok){
        Swal.fire(
          'Gracias',
          resp.mensaje,
          'success'
          )
      }else{
        Swal.fire(
          'Ha ocurrido un error',
          resp.mensaje,
          'error'
          )
      }
      console.log(resp.mensaje)
    })
  }


}
