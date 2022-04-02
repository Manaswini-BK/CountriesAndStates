
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryAndStateDbService } from '../country-and-state-db.service';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent implements OnInit {

  @Output() inputSelected = new EventEmitter();
  countryList = [];
  countrySelected = '';

  constructor(private countryStateService: CountryAndStateDbService) { }

  ngOnInit(): void {
    this.getCountriesList();
  }

  private getCountriesList(){
      this.countryStateService.getCountries().subscribe((response: any)=>{
        this.countryList = response.data;
      })
  }

  selectCountry(e: Event){
    e.stopPropagation();
    e.preventDefault();
    this.countrySelected = (e.target as HTMLSelectElement).value;
    this.inputSelected.emit(this.countrySelected);
  }

}

