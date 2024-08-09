import { Component } from '@angular/core';
import fruits from '../files/fruits.json';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-fruit-task7',
  templateUrl: './fruit-task7.component.html',
  styleUrl: './fruit-task7.component.css'
})
export class FruitTask7Component {
  fruitName = '';
  fruitFamily = '';
  fruitOrder = '';
  fruitCalories: number = 0;
  fruitFat: number = 0;
  fruitProtein: number = 0;


  fruitArray: { name: string, id: number, family: string, order: string, genus: string, nutritions: { calories: number, fat: number, sugar: number, carbohydrates: number, protein: number } }[] = fruits;

  filteredFruits: any[];

  constructor() {
    this.filteredFruits = this.fruitArray;
  }

  // Filter function for name
  filterByName(name: string) {
    this.filteredFruits = this.fruitArray.filter(fruit => fruit.name.toLowerCase().includes(name.toLowerCase()));
  }

  // Filter function for family
  filterByFamily(family: string) {
    this.filteredFruits = this.fruitArray.filter(fruit => fruit.family.toLowerCase().includes(family.toLowerCase()));
  }

  // Filter function for order
  filterByOrder(order: string) {
    this.filteredFruits = this.fruitArray.filter(fruit => fruit.order.toLowerCase().includes(order.toLowerCase()));
  }
  filterByProtein(protein: number) {
    this.filteredFruits = this.fruitArray.filter(fruit => fruit.nutritions.protein >= protein)
  }
  filterByFat(fat: number) {
    this.filteredFruits = this.fruitArray.filter(fruit => fruit.nutritions.fat >= fat)
  }
  filterByCalories(calories: number) {
    this.filteredFruits = this.fruitArray.filter(fruit => fruit.nutritions.calories >= calories)
  }

  fruitDetails(fruit: any){
    
  }
}
