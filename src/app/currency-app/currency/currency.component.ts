import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

enum DEFAULT_CURRENCIES {
  USD = 'USD',
  EUR = 'EUR'
}

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule , MatInputModule, MatSelectModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent implements OnInit {
  amount: number = 1;
  submitedAmount: number = 1;
  sumittedCurrency: string = '';
  fromCurrency: string = DEFAULT_CURRENCIES.USD;
  toCurrency: string = DEFAULT_CURRENCIES.EUR;
  convertedAmount: number | null = null;
  currencies: string[] = [];

  ngOnInit() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    fetch('https://api.frankfurter.app/currencies').then(data => data.json()).then(data => {
      this.currencies = Object.keys(data)
    })
  }

  convertCurrency() {
    if (this.fromCurrency === this.toCurrency) {
      this.convertedAmount = this.amount;
      return;
    }

    const queryParams = `?amount=${this.amount}&from=${this.fromCurrency}&to=${this.toCurrency}`;
    this.submitedAmount = this.amount;
    this.sumittedCurrency = this.toCurrency;
  
    const url = `https://api.frankfurter.app/latest${queryParams}`;

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.convertedAmount = data.rates[this.toCurrency];
      })
  }
}
