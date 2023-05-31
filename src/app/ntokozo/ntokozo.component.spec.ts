import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtokozoComponent } from './ntokozo.component';

describe('NtokozoComponent', () => {
  let component: NtokozoComponent;
  let fixture: ComponentFixture<NtokozoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtokozoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtokozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
