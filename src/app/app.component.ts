import { Component } from '@angular/core';
//en los ts se hace la logica de los elementos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
//este componente es una clase
export class AppComponent {
  public title: string = 'Hola mundo';

}
