import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-content-list',
  standalone: true, // Declare it as standalone
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
  imports: [CommonModule], // Add CommonModule here
})
export class ContentListComponent {
  contents = [
    { id: 1, title: 'Angular Basics', category: 'Technology', tags: ['Angular', 'Frontend'], publishDate: '2024-01-01' },
    { id: 2, title: 'Healthy Living', category: 'Health', tags: ['Fitness', 'Wellness'], publishDate: '2024-02-15' }
  ];

  deleteContent(id: number) {
    this.contents = this.contents.filter(content => content.id !== id);
  }
}
