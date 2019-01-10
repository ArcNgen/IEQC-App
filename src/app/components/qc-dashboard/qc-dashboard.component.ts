import { Component, OnInit } from '@angular/core';
import { QcTestDataService } from "../../qc-test-data.service";
import { Chart } from "chart.js";

@Component({
  selector: 'app-qc-dashboard',
  templateUrl: './qc-dashboard.component.html',
  styleUrls: ['./qc-dashboard.component.scss']
})
export class QcDashboardComponent implements OnInit {

  constructor(
    private dataService: QcTestDataService
  ) { }

  ngOnInit() {
    this.dataService.dailyForcast().subscribe(res => {
      console.log('res', res);
      
    });
  }

}
