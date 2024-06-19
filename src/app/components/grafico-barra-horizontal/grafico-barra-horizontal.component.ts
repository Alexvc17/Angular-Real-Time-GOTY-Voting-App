import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

  //voy a requerir informacion del compojente padre por medio del selector de inicio.html asi que hago un Input
  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 30
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 15
  //   }
  // ];




  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  interval:any;
  constructor() {
    // this.interval = setInterval(()=>{
    //   console.log("tick");
    //   //operador spread extrae todos los objetos que se encuentran dentro de los resultados y
    //   //creamos una copia del arreglo de objetos y la almacenamos en newResults
    //   const newResults = [...this.results];

    //   for(let i in newResults){
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }

    //   this.results = [...newResults];
    // },1500);
  }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnDestroy(): void {

    // clearInterval(this.interval);

  }
}
