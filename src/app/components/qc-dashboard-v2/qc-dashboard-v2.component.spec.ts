import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcDashboardV2Component } from './qc-dashboard-v2.component';

describe('QcDashboardV2Component', () => {
  let component: QcDashboardV2Component;
  let fixture: ComponentFixture<QcDashboardV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcDashboardV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcDashboardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
