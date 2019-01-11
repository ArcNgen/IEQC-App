import { Component, OnInit } from '@angular/core';
import { QcTestDataService } from "../../qc-test-data.service";

import { Chart } from "chart.js";

@Component({
  selector: 'app-qc-dashboard',
  templateUrl: './qc-dashboard.component.html',
  styleUrls: ['./qc-dashboard.component.scss']
})
export class QcDashboardComponent implements OnInit {
  chart: [];

  constructor(
    private dataService: QcTestDataService
  ) { }

  ngOnInit() {
    this.dataService.dailyForcast().subscribe(res => {
      console.log(res);
      
      let temp_max = res['list'].map(res => res.main.temp_max);
      let temp_min = res['list'].map(res => res.main.temp_min);
      let alldates = res['list'].map(res => res.dt);
      let weatherDates = [];
      // let canvasId = document.getElementById("canvas");
      // let ctx = document.getElementById("canvas");

      alldates.forEach((res) => {
        let jsdate = new Date(res * 1000);
        weatherDates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}));
      });

      

      this.chart = new Chart('myCanvas', {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: '#3cba9f',
              fill: false
            },
            {
              data: temp_min,
              borderColor: '#ffcc00',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxis: [{
              display: true
            }],
            yAxis: [{
              display: true
            }]
          },
          annotation: {
            annotations: [{
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              value: 265,
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 4,
              label: {
                enabled: false,
                content: 'Test label'
              }
            }]
          }
        }
      });

      // console.log(this.chart); 
      
    });
  }

}
