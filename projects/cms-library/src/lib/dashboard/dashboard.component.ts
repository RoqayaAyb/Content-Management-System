import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats = {
    totalContents: 10,
    totalCategories: 3,
    mostPopularTag: 'Angular'
  };

  constructor() {}

  ngOnInit(): void {}
}
