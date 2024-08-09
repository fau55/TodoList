import { Component } from '@angular/core';
import fruits from '../files/fruits.json';

@Component({
  selector: 'app-fruit-task1',
  templateUrl: './fruit-task1.component.html',
  styleUrl: './fruit-task1.component.css'
})

export class FruitTask1Component {
  fruitArray:{name:string, id: number, family: string, order: string, genus: string, nutritions:{calories: number, fat: number, sugar: number, carbohydrates: number, protein: number}}[]=fruits;

  constructor(){
    
  }
}
