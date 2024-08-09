import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-color-cube',
  templateUrl: './color-cube.component.html',
  styleUrl: './color-cube.component.css'
})
export class ColorCubeComponent {
  cubeColor = '';
  cubeWidth = 0;
  cubeHeight = 0;

cube = {
    color: '',
    width: 0,
    height: 0,
  };

  constructor(private router: Router) {}

  createCube() {
    if(this.cubeColor !== '' && this.cubeWidth !== undefined && this.cubeHeight !== undefined){
      if(this.cubeWidth === this.cubeHeight){
        this.cube.color = this.cubeColor;
        this.cube.width = this.cubeWidth;
        this.cube.height = this.cubeHeight;
        console.log(this.cube);
        
        // Navigate to cube-view route with cube data as queryParams
        this.router.navigate(['/cubeView'],{ queryParams: this.cube });
      }
      else{
        Swal.fire({
          title: 'Warning',
          icon: 'warning',
          text:'Width and Height should be Equal',
          // showConfirmButton : false,
          // timer: 1000
        })
      }

    }
    else {
      Swal.fire(
        {
          icon: 'error',
          text: 'Please Enter all the fields',
          showConfirmButton : false,
          timer: 1000
        }
      )

    }
  }

}
