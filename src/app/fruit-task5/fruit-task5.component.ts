import { Component } from '@angular/core';
import fruits from '../files/fruits.json';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-fruit-task5',
  templateUrl: './fruit-task5.component.html',
  styleUrl: './fruit-task5.component.css'
})
export class FruitTask5Component {
  fruitArray:{name:string, id: number, family: string, order: string, genus: string, nutritions:{calories: number, fat: number, sugar: number, carbohydrates: number, protein: number}}[]=fruits;

}
