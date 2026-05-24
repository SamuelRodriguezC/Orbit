import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsGrid } from './planets-grid';

describe('PlanetsGrid', () => {
  let component: PlanetsGrid;
  let fixture: ComponentFixture<PlanetsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetsGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetsGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
