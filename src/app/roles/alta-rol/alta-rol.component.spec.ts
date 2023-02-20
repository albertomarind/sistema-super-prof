import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRolComponent } from './alta-rol.component';

describe('AltaRolComponent', () => {
  let component: AltaRolComponent;
  let fixture: ComponentFixture<AltaRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
