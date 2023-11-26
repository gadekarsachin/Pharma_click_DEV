import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryContainerComponent } from './subcategory-container.component';

describe('SubcategoryContainerComponent', () => {
  let component: SubcategoryContainerComponent;
  let fixture: ComponentFixture<SubcategoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
