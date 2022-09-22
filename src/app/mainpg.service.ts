import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockObj } from './stock-obj';

@Injectable({
  providedIn: 'root'
})

export class MainpgService 
{
  /*private baseUrl="http://localhost:8082/mainpage"
  constructor(private httpClient: HttpClient) { }
  responselist=new Array<StockObj>();
  public getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl,{
      observe: 'body',
      responseType: 'json',
  });*/
}

