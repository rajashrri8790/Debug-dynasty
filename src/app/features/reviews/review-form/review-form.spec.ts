import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  ReviewForm
} from './review-form';

describe('ReviewForm', () => {

  let component: ReviewForm;

  let fixture:
    ComponentFixture<ReviewForm>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        ReviewForm
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        ReviewForm
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Review Form Exists

  it('should contain review form', () => {

    expect(component.reviewForm)
      .toBeTruthy();

  });

  // ✅ Default Rating

  it('should have default rating 0', () => {

    expect(component.selectedRating)
      .toBe(0);

  });

  // ✅ Rating Selection

  it('should set rating', () => {

    component.setRating(4);

    expect(component.selectedRating)
      .toBe(4);

  });

  // ✅ Form Validation

  it('should validate form', () => {

    component.reviewForm.setValue({

      userName: 'Sameera',

      hotelName: 'StayEase',

      reviewMessage:
      'Amazing luxury hotel experience'

    });

    expect(component.reviewForm.valid)
      .toBeTruthy();

  });

});