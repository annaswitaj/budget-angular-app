import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BtnCardComponent} from './btn-card.component';

describe('BtnCardComponent', () => {
  let component: BtnCardComponent;
  let fixture: ComponentFixture<BtnCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BtnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
