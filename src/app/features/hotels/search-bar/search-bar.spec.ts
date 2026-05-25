import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  SearchBar
} from './search-bar';

describe('SearchBar', () => {

  let component: SearchBar;

  let fixture:
    ComponentFixture<SearchBar>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        SearchBar
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        SearchBar
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Default Guests

  it('should have default guests value', () => {

    expect(component.guests)
      .toBe(1);

  });

  // ✅ Search Text

  it('should update search text', () => {

    component.searchText =
      'Luxury Resort';

    expect(component.searchText)
      .toContain('Luxury');

  });

  // ✅ Location

  it('should update location', () => {

    component.location = 'Goa';

    expect(component.location)
      .toBe('Goa');

  });

});