import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieplayComponent } from './movieplay.component';

describe('MovieplayComponent', () => {
  let component: MovieplayComponent;
  let fixture: ComponentFixture<MovieplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
