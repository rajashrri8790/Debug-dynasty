import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  HotelDetails
} from './hotel-details';

describe('HotelDetails', () => {

  let component: HotelDetails;

  let fixture:
    ComponentFixture<HotelDetails>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        HotelDetails
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        HotelDetails
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Hotel Exists

  it('should contain hotel details', () => {

    expect(component.hotel)
      .toBeTruthy();

  });

  // ✅ Amenities

  it('should contain amenities', () => {

    expect(component.hotel.amenities.length)
      .toBeGreaterThan(0);

  });

  // ✅ Rooms

  it('should contain rooms', () => {

    expect(component.hotel.rooms.length)
      .toBeGreaterThan(0);

  });

  // ✅ Attractions

  it('should contain nearby attractions', () => {

    expect(component.hotel.nearbyAttractions.length)
      .toBeGreaterThan(0);

  });

});