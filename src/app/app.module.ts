import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputCountryComponent } from './input-country/input-country.component';
import { ShowStatesComponent } from './show-states/show-states.component';

@NgModule({
  declarations: [
    AppComponent,
    InputCountryComponent,
    ShowStatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
