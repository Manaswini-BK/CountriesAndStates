import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStatesComponent } from './show-states.component';

describe('ShowStatesComponent', () => {
  let component: ShowStatesComponent;
  let fixture: ComponentFixture<ShowStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
