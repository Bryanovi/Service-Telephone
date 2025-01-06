import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListAdminComponent } from './page-list-admin.component';

describe('PageListAdminComponent', () => {
  let component: PageListAdminComponent;
  let fixture: ComponentFixture<PageListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
