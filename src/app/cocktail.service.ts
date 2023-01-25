import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktail!: {
    name: string;
    price: number;
    img: string;
  };

  constructor() {}

  getCocktails() {
    return [
      {
        name: 'toto',
        price: 11,
        img: 'photo de cocktail',
      },
      {
        name: 'tata',
        price: 10,
        img: 'photo de cocktail',
      },
      {
        name: 'titi',
        price: 7,
        img: 'photo de cocktail',
      },
    ];
  }
}
