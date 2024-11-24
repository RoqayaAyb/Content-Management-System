import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '/assets/data.json'; // Path to the static JSON file

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  saveData(data: any): Observable<any> {
    // Simulating a POST request 
    return this.http.post(this.dataUrl, data);
  }
}
