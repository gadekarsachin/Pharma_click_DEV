import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSectionPageComponent } from './all-section-page.component';

describe('AllSectionPageComponent', () => {
  let component: AllSectionPageComponent;
  let fixture: ComponentFixture<AllSectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
