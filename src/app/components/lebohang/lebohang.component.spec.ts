import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebohangComponent } from './lebohang.component';

describe('LebohangComponent', () => {
  let component: LebohangComponent;
  let fixture: ComponentFixture<LebohangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LebohangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LebohangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
