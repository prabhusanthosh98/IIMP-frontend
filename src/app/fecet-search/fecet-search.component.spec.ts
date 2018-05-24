import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FecetSearchComponent } from './fecet-search.component';

describe('FecetSearchComponent', () => {
  let component: FecetSearchComponent;
  let fixture: ComponentFixture<FecetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FecetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FecetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
