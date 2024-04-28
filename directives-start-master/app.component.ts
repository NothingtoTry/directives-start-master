import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [1, 2, 3, 4, 5];
  onlyOdd = false;

  isOdd(num: number[]): boolean[] {
    return num.map(n => n % 2 !== 0);
  }

  }
  

