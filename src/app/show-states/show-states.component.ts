import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-states',
  templateUrl: './show-states.component.html',
  styleUrls: ['./show-states.component.css']
})
export class ShowStatesComponent implements OnInit {

  constructor() { }
  @Input() listOfStates = [];

  ngOnInit(): void {
  }

}
