import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
import { historyKey } from '../constants';
import { ResultItem } from '../types';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'from', 'to', 'result'];
  dataHistorySource = new MatTableDataSource<ResultItem[]>([]);

  ngOnInit() {
    const storedHistory = sessionStorage.getItem(historyKey);
    if (storedHistory) {
      this.dataHistorySource.data = JSON.parse(storedHistory);
    }
  }

 
}