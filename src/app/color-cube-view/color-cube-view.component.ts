import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-color-cube-view',
  templateUrl: './color-cube-view.component.html',
  styleUrl: './color-cube-view.component.css'
})
export class ColorCubeViewComponent {
  @ViewChild('myDiv')private myDiv!: ElementRef;
  @ViewChild('myDiv2')private myDiv2!: ElementRef;
  @ViewChild('myDiv3')private myDiv3!: ElementRef;
  @ViewChild('myDiv4')private myDiv4!: ElementRef;
  @ViewChild('myDiv5')private myDiv5!: ElementRef;
  @ViewChild('myDiv6')private myDiv6!: ElementRef;
  @ViewChild('myDiv7')private myDiv7!: ElementRef;

  cubeColor = '';
  cubeWidth = 0;
  cubeHeight = 0;
  translate = 0;
  Ntranslate = -0;
  isCubeCreated = false;

  

  constructor(private activedRoute: ActivatedRoute) { }
  ngOnInit(){
    this.activedRoute.queryParams.subscribe(params => {
      this.cubeColor = params['color'];
      this.cubeWidth = params['width'];
      this.cubeHeight = params['height'];
      this.translate = params['width'] / 2;
      this.Ntranslate = -this.translate;
      console.log(this.translate);
      console.log(this.Ntranslate);
      // window.location.reload();
      this.isCubeCreated = true;
    })
  }
  ngAfterViewInit(){
    this.myDiv.nativeElement.style.width = this.cubeWidth
    this.myDiv.nativeElement.style.height = this.cubeHeight
    this.myDiv2.nativeElement.style.backgroundColor = this.cubeColor;
    this.myDiv3.nativeElement.style.backgroundColor = this.cubeColor;
    this.myDiv4.nativeElement.style.backgroundColor = this.cubeColor;
    this.myDiv5.nativeElement.style.backgroundColor = this.cubeColor;
    this.myDiv6.nativeElement.style.backgroundColor = this.cubeColor;
    this.myDiv7.nativeElement.style.backgroundColor = this.cubeColor;

  }



}
