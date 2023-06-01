import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohammedComponent } from './mohammed.component';

describe('MohammedComponent', () => {
  let component: MohammedComponent;
  let fixture: ComponentFixture<MohammedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MohammedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MohammedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
