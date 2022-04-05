import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaErrorComponent } from './ruta-error.component';

describe('RutaErrorComponent', () => {
  let component: RutaErrorComponent;
  let fixture: ComponentFixture<RutaErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
