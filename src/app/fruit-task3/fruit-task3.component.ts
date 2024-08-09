import { Component } from '@angular/core';
import fruits from '../files/fruits.json';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-fruit-task3',
  templateUrl: './fruit-task3.component.html',
  styleUrl: './fruit-task3.component.css'
})
export class FruitTask3Component {
  fruitArray:{name:string, id: number, family: string, order: string, genus: string, nutritions:{calories: number, fat: number, sugar: number, carbohydrates: number, protein: number}}[]=fruits;
}
