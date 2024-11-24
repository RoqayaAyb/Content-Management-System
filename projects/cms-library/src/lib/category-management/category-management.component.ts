import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-management',
  standalone: true, // Standalone component
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css'],
  imports: [CommonModule, FormsModule], // Import necessary modules here
})
export class CategoryManagementComponent {
  categories = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Health' },
    { id: 3, name: 'Education' }
  ];
  
  newCategoryName = '';

  addCategory() {
    if (this.newCategoryName.trim()) {
      this.categories.push({
        id: this.categories.length + 1,
        name: this.newCategoryName
      });
      this.newCategoryName = '';
    }
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(category => category.id !== id);
  }
}
