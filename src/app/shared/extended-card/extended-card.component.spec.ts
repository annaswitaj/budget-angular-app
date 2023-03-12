import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExtendedCardComponent} from './extended-card.component';

describe('ExtendedCardComponent', () => {
  let component: ExtendedCardComponent;
  let fixture: ComponentFixture<ExtendedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtendedCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExtendedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
