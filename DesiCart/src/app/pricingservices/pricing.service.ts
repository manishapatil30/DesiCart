import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  "X-Api-Key": environment.xapikey
});
@Injectable({
  providedIn: 'root'
})

export class pricingService {
 
  constructor(private http: HttpClient) {
   }
  savepricingPrice(data: any) {
    return this.http.post(`${environment.baseURL}/calculate-servicefee`, data, { headers });
  }
}
