import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPlanComponent } from './master-plan.component';

describe('MasterPlanComponent', () => {
  let component: MasterPlanComponent;
  let fixture: ComponentFixture<MasterPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
