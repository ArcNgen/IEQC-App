import { Component, OnInit } from '@angular/core';

import { QcTestDataService } from "../../services/qc-test-data.service";
import { Chart } from "chart.js";

@Component({
  selector: 'app-qc-dashboard-v2',
  templateUrl: './qc-dashboard-v2.component.html',
  styleUrls: ['./qc-dashboard-v2.component.scss']
})
export class QcDashboardV2Component implements OnInit {
  chart: [];

  constructor(
    private dataService: QcTestDataService
  ) { }

  ngOnInit() {
    let data = this.dataService.testAPICall().subscribe(result => {
      let dates = result['series']['data'].map(result => result[0]).reverse();
      let dataValues = result['series']['data'].map(result => result[1]).reverse();


      console.log('chart data', dates, dataValues);
      // console.log('data', result);
      
      this.chart = new Chart('myCanvas', {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              data: dataValues,
              borderColor: '#3cba9f',
              fill: false
            },
            // {
            //   data: temp_min,
            //   borderColor: '#ffcc00',
            //   fill: false
            // }
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
      
      // return result;
    });
    
    
    
  }

}
