import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetilesComponent } from './movie-detiles.component';

describe('MovieDetilesComponent', () => {
  let component: MovieDetilesComponent;
  let fixture: ComponentFixture<MovieDetilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
