import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfSharedLibComponent } from './mf-shared-lib.component';

describe('MfSharedLibComponent', () => {
  let component: MfSharedLibComponent;
  let fixture: ComponentFixture<MfSharedLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfSharedLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfSharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
