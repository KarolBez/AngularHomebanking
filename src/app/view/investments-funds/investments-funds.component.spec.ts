import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsFundsComponent } from './investments-funds.component';

describe('InvestmentsFundsComponent', () => {
  let component: InvestmentsFundsComponent;
  let fixture: ComponentFixture<InvestmentsFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsFundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
