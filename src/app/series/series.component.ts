import { Component, OnInit } from '@angular/core';
import { series } from './data';
import { Serie } from './Serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesBase: Serie[]=series;
  numSeries:number=series.length;
  numTemporadas:number=series.reduce((acc,serie)=>acc+serie.temporadas,0);
  promedio:number;
  constructor() { this.promedio=this.numTemporadas/this.numSeries; }

  ngOnInit() {
  }

}
