import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsPage } from './planets-page';

describe('PlanetsPage', () => {
  let component: PlanetsPage;
  let fixture: ComponentFixture<PlanetsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
