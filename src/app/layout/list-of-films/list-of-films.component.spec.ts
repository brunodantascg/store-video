import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFilmsComponent } from './list-of-films.component';

describe('ListOfFilmsComponent', () => {
  let component: ListOfFilmsComponent;
  let fixture: ComponentFixture<ListOfFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
