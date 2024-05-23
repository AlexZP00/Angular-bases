import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counter</h1>
  <h3>Counter: {{counter}}</h3>
<br>

<button (click)="upCount(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="upCount(2)">-1</button>


  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  public upCount = (value:number):void =>{

    value === 1? this.counter+=1: this.counter !== 1 ? this.counter -=1:this.counter;

  }

  public reset = ():void =>{
    this.counter = 10;
  }

}








// import { Component } from "@angular/core";

// //una clase se convierte en un componente por la directiva
// //@component

// //la diferencia entre template y template url es
// //que template es para un hhtml externo y template es para añadir html desde el ts
// //los componentes deben definirse en algun lugar
// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>'
// })


// export class  CounterComponent {

// }
