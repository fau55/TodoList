import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Task3AngularComponent } from './task3-angular/task3-angular.component';
import { FruitsComponent } from './fruits/fruits.component';
import { TableModule } from 'primeng/table';
import { FruitTask1Component } from './fruit-task1/fruit-task1.component';
import { FruitTask2Component } from './fruit-task2/fruit-task2.component';
import { FruitTask3Component } from './fruit-task3/fruit-task3.component';
import { FruitTask4Component } from './fruit-task4/fruit-task4.component';
import { FruitTask6Component } from './fruit-task6/fruit-task6.component';
import { FruitTask5Component } from './fruit-task5/fruit-task5.component';
import { FruitTask7Component } from './fruit-task7/fruit-task7.component';
import { UsersComponent } from './users/users.component';
import { EncriptPipePipe } from './encript-pipe.pipe';
import { GenderPipe } from './gender.pipe';
import { RsPipe } from './rs.pipe';
import { FilteringPipe } from './filtering.pipe';
import { AgeGroupPipe } from './age-group.pipe';
import { DatePipe } from '@angular/common';
import { FormateDatePipe } from './formate-date.pipe';
import { ColorCubeComponent } from './color-cube/color-cube.component';
import { ColorCubeViewComponent } from './color-cube-view/color-cube-view.component';
import { HomeComponent } from './home/home.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryNamePipe } from './country-name.pipe';
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
    UniversityComponent,
    ToDoListComponent,
    Task3AngularComponent,
    FruitsComponent,
    FruitTask1Component,
    FruitTask2Component,
    FruitTask3Component,
    FruitTask4Component,
    FruitTask6Component,
    FruitTask5Component,
    FruitTask7Component,
    UsersComponent,
    EncriptPipePipe,
    GenderPipe,
    RsPipe,
    FilteringPipe,
    AgeGroupPipe,
    FormateDatePipe,
    ColorCubeComponent,
    ColorCubeViewComponent,
    HomeComponent,
    CountryListComponent,
    CountryDetailsComponent,
    CountryNamePipe,
    TodolistDbComponent,
  ],
  imports: [
    // NgbModule,
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
