import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionWizardComponent } from './intervention-wizard.component';

describe('InterventionWizardComponent', () => {
  let component: InterventionWizardComponent;
  let fixture: ComponentFixture<InterventionWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterventionWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
