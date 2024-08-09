import { Component } from '@angular/core';
import fruits from '../files/fruits.json';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-fruit-task6',
  templateUrl: './fruit-task6.component.html',
  styleUrl: './fruit-task6.component.css'
})
export class FruitTask6Component {
  fruitArray:{name:string, id: number, family: string, order: string, genus: string, nutritions:{calories: number, fat: number, sugar: number, carbohydrates: number, protein: number}}[]=fruits;

  constructor() {
    // Sorting fruits by fat content in descending order
    this.fruitArray.sort((a, b) => b.nutritions.protein - a.nutritions.protein);
  }

}
