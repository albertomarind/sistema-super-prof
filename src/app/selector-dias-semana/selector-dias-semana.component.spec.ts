import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDiasSemanaComponent } from './selector-dias-semana.component';

describe('SelectorDiasSemanaComponent', () => {
  let component: SelectorDiasSemanaComponent;
  let fixture: ComponentFixture<SelectorDiasSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorDiasSemanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorDiasSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
