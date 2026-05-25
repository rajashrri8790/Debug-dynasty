import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  ReviewList
} from './review-list';

describe('ReviewList', () => {

  let component: ReviewList;

  let fixture:
    ComponentFixture<ReviewList>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        ReviewList
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        ReviewList
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Reviews Exist

  it('should contain reviews', () => {

    expect(component.reviews.length)
      .toBeGreaterThan(0);

  });

  // ✅ Review User

  it('should contain user names', () => {

    expect(component.reviews[0].userName)
      .toContain('Sameera');

  });

  // ✅ Ratings

  it('should contain ratings', () => {

    expect(component.reviews[0].rating)
      .toBeGreaterThan(0);

  });

  // ✅ Comments

  it('should contain comments', () => {

    expect(component.reviews[0].comment.length)
      .toBeGreaterThan(5);

  });

});