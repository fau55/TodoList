import { Component } from '@angular/core';
import users from '../files/users.json'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  // Array that stores the value of json file
  userArray = users.splice(1,9);
  // used in encryption pipe
  secretKey: string = '';
  // to flip the cards if it is true
  flippedStates: boolean[] = [];
  // used in filter pipe to search the string
  searchText: string = '';
  // shows the total balance
  totalBalance: any;
  // to show how many is active { active = true}
  isActiveNumber = 0;

  // to show the number of users joined in 2023 and 2024
  newUser: number = 0;
  // the year array will store the 1st 4 char of resgestered string  "registered": "2023-03-28T09:54:57 -06:-30"
  yearArray: any[] = [];
  // values to show in the modal (view Details)
  vdName: string = '';
  vdGender: string = '';
  vdAge: number = 0;
  vdAbout: string = '';
  vdRegisterOn = '';
  vdAddress: string = '';
  vdEyeColor: string = '';

  ngOnInit() {
    // Initialize the flippedStates array with false values for each card
    this.userArray.forEach((element: any) => {

      // removing the symbol ($1,701.70) 
      // coverting the remaining string with int using '+'
      element.balance = +element.balance.replace(/[^0-9.-]+/g, "");

      // to apply false state in all the elemnet of the array
      this.flippedStates.push(false);

      // counting how many users is active
      if (element.isActive == true) {
        this.isActiveNumber++;

      }

      // storing the first four char in the yearArray
      let num = element.registered.slice(0, 4);
      this.yearArray.push(num);
    })

    // counting newUsers
    this.yearArray.forEach((item: any) => {
      //  console.log(item);
      if (item == '2024' || item == '2023') {
        this.newUser++;
      }
    })

    // getting the sum of balance
    this.totalBalance = this.userArray.reduce((total: any, item: any) => {
      return total + item.balance;
    }, 0);


  }

  // to show view details in modal
  showDetails(user: any) {
    this.vdAbout = user.about;
    this.vdAddress = user.address;
    this.vdAge = user.age;
    this.vdGender = user.gender;
    this.vdRegisterOn = user.registered;
    this.vdName = user.name;
    this.vdEyeColor = user.eyeColor
  }

  // to filp the card if the password is correct
  async flipCard(index: number) {

    // Check if the card is currently flipped
    if (!this.flippedStates[index]) {
      // Prompt the user to enter their password
      const { value: password } = await Swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
          maxlength: "25",
          autocapitalize: "off",
          autocorrect: "on",
        }
      });
      // Check if the entered password is correct

      if (password == this.userArray[index].password) {

        // for correct password
        Swal.fire({
          text: 'Correct Password',
          icon: 'success',
          showConfirmButton: false,
          timer: 800
        });

        // flipping card if the password is correct
        this.flippedStates[index] = !this.flippedStates[index];

      } else if (password === '') {

        // Show a warning if the password field is empty
        Swal.fire({
          text: 'Field is Empty Please Enter Password',
          icon: 'warning'
        });
        
      } else {
        // Show an error message for incorrect password
        Swal.fire({
          text: "Incorrect Password",
          icon: "error"
        });
      }
    } else {
      // If the card is already flipped, just toggle it back without prompting for password
      this.flippedStates[index] = !this.flippedStates[index];
    }
  }

}
