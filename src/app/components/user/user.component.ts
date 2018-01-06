import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];
  hello:any;
  monthlyPayments: string;

  constructor() {
    console.log("constructor ran");
  }

  ngOnInit() {
    console.log("ngOnInit ran");
    this.name = "John Doe";
    this.age = 30;
    this.address = {
      street: "123 Main Street",
      city: "Boston",
      state: "MA"
    };
    this.hobbies = ['write code', 'watch movies', 'listen to music'];
  }


  onSubmit(name, balance, interest, term){
    this.name = name;
    console.table({balance: balance, interest: interest, term: term});
    this.monthlyPayments = (this.calculateMortgage(balance, interest, term));

    return false;
  }

  calculateMortgage(b, i, t){
    const principal = parseInt(b)
    const monthlyRate = parseInt(i)/ 12 * 0.01;
    const numPayments = parseInt(t) * 12;
    const mortgage = (principal *
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    ).toFixed(2);
    return "$"+ mortgage;
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}
