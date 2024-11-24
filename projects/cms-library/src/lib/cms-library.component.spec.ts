import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsLibraryComponent } from './cms-library.component';

describe('CmsLibraryComponent', () => {
  let component: CmsLibraryComponent;
  let fixture: ComponentFixture<CmsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
