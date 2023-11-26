import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvSliderComponent } from './adv-slider.component';

describe('AdvSliderComponent', () => {
  let component: AdvSliderComponent;
  let fixture: ComponentFixture<AdvSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
