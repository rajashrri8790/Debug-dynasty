import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  LandingPage
} from './landing-page';

describe('LandingPageComponent', () => {

  let component: LandingPage;

  let fixture:
    ComponentFixture<LandingPage>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        LandingPage
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        LandingPage
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Hotels Exist

  it('should contain hotels', () => {

    expect(component.hotels.length)
      .toBeGreaterThan(0);

  });

  // ✅ Hotel Name

  it('should contain hotel names', () => {

    expect(component.hotels[0].hotelName)
      .toContain('StayEase');

  });

  // ✅ Hotel Rating

  it('should contain ratings', () => {

    expect(component.hotels[0].rating)
      .toBeGreaterThan(0);

  });

  // ✅ Hotel Price

  it('should contain hotel prices', () => {

    expect(component.hotels[0].price)
      .toBeGreaterThan(0);

  });

});