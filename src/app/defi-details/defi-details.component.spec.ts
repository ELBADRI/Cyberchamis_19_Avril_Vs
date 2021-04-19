import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiDetailsComponent } from './defi-details.component';

describe('DefiDetailsComponent', () => {
  let component: DefiDetailsComponent;
  let fixture: ComponentFixture<DefiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
