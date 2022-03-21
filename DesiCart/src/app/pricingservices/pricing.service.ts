import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  "X-Api-Key": environment.xapikey,
  "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzMTcwNjMsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjQ3ODQyNzEwLCJleHAiOjE2NDg3MDY3MTAsIm5iZiI6MTY0Nzg0MjcxMCwianRpIjoiT2dmanl4OVN6T1UwUm1zMSJ9.drB4HNSCyZW0TB8Rrw0Xy75DUH8HasWo3uYlcWQ7UUc"
  // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzMTcwNjMsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjE3MzQyNzIyLCJleHAiOjE2MTgyMDY3MjIsIm5iZiI6MTYxNzM0MjcyMiwianRpIjoiUWU4U2h6R29UMkNYTVVxWSJ9.uLGSptMQYCaeBrivMqX461sM0BKlh5oA4qeRJ5-bhdA "
});

const obj = new HttpHeaders({
  "Content-Type": "application/json",
 
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

  pickupcharges(data: any) {
    return this.http.get(`https://apiv2.shiprocket.in/v1/external/courier/serviceability?pickup_postcode=${data.pickup_postcode}&delivery_postcode=${data.delivery_postcode}&cod=${0}&weight=${data.weight}`, { headers });
  }
}
