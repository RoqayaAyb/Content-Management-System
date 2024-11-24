import { Component } from '@angular/core';

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.css']
})
export class ContentViewerComponent {
  templates = ['Template 1', 'Template 2', 'Template 3'];
  selectedContent: string = '';

  onTemplateChange(event: Event) {
    this.selectedContent = (event.target as HTMLSelectElement).value;
  }

  // Generate options manually if you don't want to use *ngFor
  generateOptions(): string {
    return this.templates.map(template => `<option value="${template}">${template}</option>`).join('');
  }

  isContentSelected(): boolean {
    return this.selectedContent !== '';
  }
}
