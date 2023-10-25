import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-learning',
  templateUrl: './home-learning.component.html',
  styleUrls: ['./home-learning.component.css']
})
export class HomeLearningComponent implements OnInit{
  countries: any[] = [];

  selectedCountry: any;
  products: any[] = [
    {
      name:'Step-by-step process to mainstream gender in climate-smart agricultural initiatives',
      code:'1',
      category:'Important',
    },
    {
      name:'a',
      code:'2',
      category:'Useful',
    },
    {
      name:'b',
      code:'3',
      category:'Useful',
    },
    {
      name:'c',
      code:'4',
      category:'Optional',
    },
  ];

  selectedProducts: any[] = [];
  ngOnInit() {
    this.countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
}
}
