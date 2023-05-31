import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MukosiComponent } from './mukosi.component';

describe('MukosiComponent', () => {
  let component: MukosiComponent;
  let fixture: ComponentFixture<MukosiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MukosiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MukosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
