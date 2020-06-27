import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotromComponent } from './jumbotrom.component';

describe('JumbotromComponent', () => {
  let component: JumbotromComponent;
  let fixture: ComponentFixture<JumbotromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
