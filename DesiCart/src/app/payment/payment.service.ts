import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
const headers = new HttpHeaders({
  "X-Api-Key": environment.xapikey
});
@Injectable({
  providedIn: 'root'
})

export class PaymentService {
 
  constructor(private http: HttpClient) {
   }

   getpaymentdetails(data:any) : Observable<any> {
    return this.http.post(`${environment.baseURL}/stripepayment`,data, { headers });

  }
}
