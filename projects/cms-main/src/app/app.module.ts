import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true  
})
export class AppComponent {}

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule],
  providers: [],
  bootstrap: []
})
export class AppModule {}