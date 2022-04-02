import { Component } from '@angular/core';
import { CountryAndStateDbService } from './country-and-state-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private countryStateDB: CountryAndStateDbService){}
  title = 'countriesAndStates';
  listOfStates=[];
  country = '';
  showNoInfoAvailable: boolean = false;

  getStates(selectedCountry: string){
    this.showNoInfoAvailable = false;
    this.country = selectedCountry;
    this.countryStateDB.getStates(selectedCountry).subscribe((response:any)=>{
      this.listOfStates = response.data.states;
      if(this.listOfStates.length === 0){
        this.showNoInfoAvailable = true;
      }
    })
  }
}
