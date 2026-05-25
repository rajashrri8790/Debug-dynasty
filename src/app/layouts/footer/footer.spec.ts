/// <reference types="jasmine" />

import {

  ComponentFixture,

  TestBed

} from '@angular/core/testing';

import {

  Footer

} from './footer';


describe('Footer', () => {

  let component: Footer;

  let fixture:
    ComponentFixture<Footer>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [

        Footer

      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        Footer
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component)
      .toBeTruthy();

  });

  // ✅ Quick Links Exist

  it('should contain quick links', () => {

    expect(
      component.quickLinks.length
    ).toBeGreaterThan(0);

  });

  // ✅ First Link

  it('should contain Home link', () => {

    expect(
      component.quickLinks[0].title
    ).toContain('Home');

  });

});