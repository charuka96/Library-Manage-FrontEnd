import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootDashBordComponent } from './root-dash-bord.component';

describe('RootDashBordComponent', () => {
  let component: RootDashBordComponent;
  let fixture: ComponentFixture<RootDashBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootDashBordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootDashBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
