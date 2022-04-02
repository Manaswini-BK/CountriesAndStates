import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryAndStateDbService {

  constructor(private http: HttpClient) { }

  public getCountries():Observable<any>{
    return this.http.get('https://countriesnow.space/api/v0.1/countries/states');
  }

  public getStates(country:string){
    let body={
      "country" : country 
    }
    return this.http.post('https://countriesnow.space/api/v0.1/countries/states',body);
  }
}
