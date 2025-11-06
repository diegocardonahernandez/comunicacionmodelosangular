import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadresCochesComponent } from './padres-coches.component';

describe('PadresCochesComponent', () => {
  let component: PadresCochesComponent;
  let fixture: ComponentFixture<PadresCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadresCochesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadresCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
