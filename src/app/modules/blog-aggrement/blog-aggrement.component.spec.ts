import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAggrementComponent } from './blog-aggrement.component';

describe('BlogAggrementComponent', () => {
  let component: BlogAggrementComponent;
  let fixture: ComponentFixture<BlogAggrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAggrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAggrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
