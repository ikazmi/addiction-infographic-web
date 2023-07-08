import { Component, OnInit } from '@angular/core';
import { chemicalAddictions } from './data/chemicalAddictions.data';
import { nonChemicalAddictions } from './data/nonChemicalAddictions.data';

@Component({
  selector: 'widget-addictions',
  templateUrl: './addictions.component.html',
  styleUrls: ['./addictions.component.css']
})
export class AddictionsComponent implements OnInit {
  chemical: string[] = 'CHEMICAL'.split('');
  nonChemical: string[] = 'NON-CHEMICAL'.split('');

  chemicalAddictions: string[] = [];
  nonChemicalAddictions: string[] = [];

  constructor() {
    this.chemicalAddictions = chemicalAddictions;
    this.nonChemicalAddictions = nonChemicalAddictions;
  }

  ngOnInit(): void {
    console.log(window.innerHeight);
  }

}
