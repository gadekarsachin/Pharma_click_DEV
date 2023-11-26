import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorySidebarComponent } from './subcategory-sidebar.component';

describe('SubcategorySidebarComponent', () => {
  let component: SubcategorySidebarComponent;
  let fixture: ComponentFixture<SubcategorySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategorySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
