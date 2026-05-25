import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  AdminLayout
} from './admin-layout';

describe('AdminLayout', () => {

  let component: AdminLayout;

  let fixture:
    ComponentFixture<AdminLayout>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        AdminLayout
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        AdminLayout
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Sidebar Items

  it('should contain sidebar items', () => {

    expect(component.sidebarItems.length)
      .toBeGreaterThan(0);

  });

  // ✅ Dashboard Menu Exists

  it('should contain dashboard menu', () => {

    expect(component.sidebarItems[0].title)
      .toContain('Dashboard');

  });

  // ✅ Routes Exist

  it('should contain valid routes', () => {

    expect(component.sidebarItems[0].route)
      .toContain('/');

  });

});