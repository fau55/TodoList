import { Component } from '@angular/core';
import fruits from '../files/fruits.json';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-fruit-task4',
  templateUrl: './fruit-task4.component.html',
  styleUrl: './fruit-task4.component.css'
})
export class FruitTask4Component {
  fruitArray:{name:string, id: number, family: string, order: string, genus: string, nutritions:{calories: number, fat: number, sugar: number, carbohydrates: number, protein: number}}[]=fruits;

  constructor() {
    // Sorting fruits by fat content in descending order
    this.fruitArray.sort((a, b) => b.nutritions.fat - a.nutritions.fat);
  }

}
