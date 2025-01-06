import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionTableAdminComponent } from './promocion-table-admin.component';

describe('PromocionTableAdminComponent', () => {
  let component: PromocionTableAdminComponent;
  let fixture: ComponentFixture<PromocionTableAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionTableAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocionTableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
