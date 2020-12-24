import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  "X-Api-Key": environment.xapikey
});
@Injectable({
  providedIn: 'root'
})

export class ShippingCalculator {
 
  constructor(private http: HttpClient) {
   }

  getCountryZones() {
    return this.http.get(`${environment.baseURL}/countryzones`, { headers });
  }

  getShippingPrice(data: any) {
    return this.http.get(`${environment.baseURL}/shippingprices?ZoneNumber=${data.ZoneNumber}&WeightKgs=${data.WeightKgs}`, { headers });
  }
}
