import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSavedItemComponent } from './get-saved-item.component';

describe('GetSavedItemComponent', () => {
  let component: GetSavedItemComponent;
  let fixture: ComponentFixture<GetSavedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSavedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSavedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
