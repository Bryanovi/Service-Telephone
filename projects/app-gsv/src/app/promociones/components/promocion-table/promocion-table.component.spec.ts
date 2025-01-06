import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionTableComponent } from './promocion-table.component';

describe('PromocionTableComponent', () => {
  let component: PromocionTableComponent;
  let fixture: ComponentFixture<PromocionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
