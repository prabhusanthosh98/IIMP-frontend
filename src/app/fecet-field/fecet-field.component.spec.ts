import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FecetFieldComponent } from './fecet-field.component';

describe('FecetFieldComponent', () => {
  let component: FecetFieldComponent;
  let fixture: ComponentFixture<FecetFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FecetFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FecetFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
