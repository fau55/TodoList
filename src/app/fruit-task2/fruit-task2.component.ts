import { Component } from '@angular/core';
import fruits from '../files/fruits.json';
@Component({
  selector: 'app-fruit-task2',
  templateUrl: './fruit-task2.component.html',
  styleUrl: './fruit-task2.component.css'
})
export class FruitTask2Component {
  fruitArray:{name:string, id: number, family: string, order: string, genus: string, nutritions:{calories: number, fat: number, sugar: number, carbohydrates: number, protein: number}}[]=fruits;

}
