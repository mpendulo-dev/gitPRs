import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BafanaComponent } from './bafana.component';

describe('BafanaComponent', () => {
  let component: BafanaComponent;
  let fixture: ComponentFixture<BafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
