<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { DataAdminService } from '../services/data-admin.service';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

<<<<<<< HEAD
  constructor(private dataApi: DataAdminService) {
    this.dataApi.getAllsubs().subscribe(subs => {
      console.log(subs)

    } )
  }

  public subs = [];
  public sub = [];
  public alumnos = [];
  public inscritos = [];
  public clases = [];

  ngOnInit() {
    this.dataApi.getAllsubs().subscribe(subs => {
      
      for (let i = 0; i < 4; i++) {
        this.inscritos[i] = subs[i].miembros;
        this.clases[i] = subs[i].clase;

        this.lineChartData[0].data[i] = subs[i].miembros;
        console.log(this.inscritos)
      }
      this.chart.update();
    } )
  }

  public lineChartData: ChartDataSets[] = [
    //{ data: [900, 80, 10], label: 'Inscritos' , yAxisID: 'y-axis-1' },
    { data: [], label: 'Usuarios Inscritos',yAxisID:'Inscritos' }
    //{ data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  
  
  //public lineChartLabels: Label[] = ['Zumba', 'Box', 'Pesas', 'Crossfit', 'Spinning'];
  public lineChartLabels: Label[] = ['Box', 'BodyBuilding', 'Crossfit', 'Spinning'];
  
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'Inscritos',
          position: 'right',
          gridLines: {
            color: 'white',
          },
          ticks: {
            fontColor: 'white',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'whitesmoke',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'whitesmoke',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'white',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: 'whitesmoke',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  
  
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  

=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
}
