import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThilivhaliComponent } from './thilivhali.component';

describe('ThilivhaliComponent', () => {
  let component: ThilivhaliComponent;
  let fixture: ComponentFixture<ThilivhaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThilivhaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThilivhaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
