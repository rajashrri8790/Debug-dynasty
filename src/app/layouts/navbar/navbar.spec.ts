import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  Navbar
} from './navbar';

describe('Navbar', () => {

  let component: Navbar;

  let fixture:
    ComponentFixture<Navbar>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        Navbar
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        Navbar
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Navbar Items

  it('should contain navigation items', () => {

    expect(component.navItems.length)
      .toBeGreaterThan(0);

  });

  // ✅ Home Route

  it('should contain home route', () => {

    expect(component.navItems[0].title)
      .toContain('Home');

  });

  // ✅ Toggle Menu

  it('should toggle menu', () => {

    component.toggleMenu();

    expect(component.isMenuOpen)
      .toBeTruthy();

  });

});