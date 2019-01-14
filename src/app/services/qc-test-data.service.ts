import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";

// api key: 1862d5630799b6cdc1b47be560fc6b49;
// api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1862d5630799b6cdc1b47be560fc6b49

@Injectable({
  providedIn: 'root'
})
export class QcTestDataService {

  constructor(
    private http: HttpClient
  ) { }

  dailyForcast(): Observable<any> {
    let link = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1862d5630799b6cdc1b47be560fc6b49";
    // let link = "https://api.openweathermap.org/data/2.5/forecast/daily?APPID=1862d5630799b6cdc1b47be560fc6b49&id=4138106&cnt=16";
    let testApiData = this.http.get<any>(link);
    
    return testApiData;
  }

  testAPICall(): Observable<any> {
    let frequency = 'W';
    let area = 'PET_SUM_SNDW_DCUS_NUS_W';
    let tableDataUrl = 'http://localhost/wpsrdata/';
    let data = this.http.get<any>(tableDataUrl);
    
    /* let tableDataUrl = 'http://localhost/wpsrdata/data/tables/2_series/W/PET_SUM_SNDW_DCUS_NUS_W.json';
    let data  = this.http.get<any>(tableDataUrl); */

    return data;
  }

}
