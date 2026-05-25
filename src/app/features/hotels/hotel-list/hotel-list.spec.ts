import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  HotelList
} from './hotel-list';

describe('HotelList', () => {

  let component: HotelList;

  let fixture:
    ComponentFixture<HotelList>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        HotelList
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        HotelList
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

  it('should contain hotel ratings', () => {

    expect(component.hotels[0].rating)
      .toBeGreaterThan(0);

  });

  // ✅ Hotel Price

  it('should contain hotel prices', () => {

    expect(component.hotels[0].price)
      .toBeGreaterThan(0);

  });

});