import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  Sidebar
} from './sidebar';

describe('Sidebar', () => {

  let component: Sidebar;

  let fixture:
    ComponentFixture<Sidebar>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        Sidebar
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        Sidebar
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Menu Items Exist

  it('should contain menu items', () => {

    expect(component.menuItems.length)
      .toBeGreaterThan(0);

  });

  // ✅ Dashboard Exists

  it('should contain dashboard item', () => {

    expect(component.menuItems[0].title)
      .toContain('Dashboard');

  });

  // ✅ Routes Exist

  it('should contain valid routes', () => {

    expect(component.menuItems[0].route)
      .toContain('/');

  });

});