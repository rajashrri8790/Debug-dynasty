import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  HotelCardComponent
} from './hotel-card';

describe('HotelCardComponent', () => {

  let component: HotelCardComponent;

  let fixture:
    ComponentFixture<HotelCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        HotelCardComponent
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        HotelCardComponent
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Hotel Data Exists

  it('should contain hotel details', () => {

    expect(component.hotel)
      .toBeTruthy();

  });

  // ✅ Hotel Name

  it('should contain hotel name', () => {

    expect(component.hotel.hotelName)
      .toContain('StayEase');

  });

  // ✅ Hotel Rating

  it('should contain hotel rating', () => {

    expect(component.hotel.rating)
      .toBeGreaterThan(0);

  });

  // ✅ Hotel Price

  it('should contain hotel price', () => {

    expect(component.hotel.price)
      .toBeGreaterThan(0);

  });

});