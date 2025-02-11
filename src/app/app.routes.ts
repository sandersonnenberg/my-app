import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency-app/currency/currency.component';
import { HistoryComponent } from './currency-app/history/history.component';

export const routes: Routes = [
    { path: 'currency', component: CurrencyComponent },
    { path: 'history', component: HistoryComponent },
    { path: '**', redirectTo: 'currency'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }