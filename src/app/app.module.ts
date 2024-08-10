import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TableModule } from 'primeng/table';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HttpClientModule }  from '@angular/common/http';
import { TodolistDbComponent } from './todolist-db/todolist-db.component'; 


const routes: Routes = [
  { path: '', redirectTo:'country-list', pathMatch: 'full'},
  // { path: 'task1', component: FruitTask1Component },
  // { path: 'task2', component: FruitTask2Component },
  // { path: 'task3', component: FruitTask3Component },
  // { path: 'task4', component: FruitTask4Component },
  // { path: 'task5', component: FruitTask5Component },
  // { path: 'task6', component: FruitTask6Component },
  // { path: 'task7', component: FruitTask7Component },
  // { path: 'createCube', component: ColorCubeComponent },
  // { path: 'cubeView', component: ColorCubeViewComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'country-details', component: CountryDetailsComponent },
];



@NgModule({

  declarations: [
    AppComponent,
    TodolistDbComponent,
  ],
  imports: [
    NgModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule 
   
  ],
  exports: [RouterModule],
  providers: [
    DatePipe,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
