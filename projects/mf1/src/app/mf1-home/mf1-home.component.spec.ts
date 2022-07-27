import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf1HomeComponent } from './mf1-home.component';

describe('Mf1HomeComponent', () => {
  let component: Mf1HomeComponent;
  let fixture: ComponentFixture<Mf1HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mf1HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mf1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
