import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-currency-app',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './currency-app.component.html',
  styleUrl: './currency-app.component.scss'
})
export class CurrencyAppComponent {

}
