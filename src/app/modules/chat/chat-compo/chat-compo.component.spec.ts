import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCompoComponent } from './chat-compo.component';

describe('ChatCompoComponent', () => {
  let component: ChatCompoComponent;
  let fixture: ComponentFixture<ChatCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
