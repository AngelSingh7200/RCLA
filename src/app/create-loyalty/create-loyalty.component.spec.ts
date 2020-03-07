import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoyaltyComponent } from './create-loyalty.component';

describe('CreateLoyaltyComponent', () => {
  let component: CreateLoyaltyComponent;
  let fixture: ComponentFixture<CreateLoyaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLoyaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
