import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamotsokoComponent } from './mamotsoko.component';

describe('MamotsokoComponent', () => {
  let component: MamotsokoComponent;
  let fixture: ComponentFixture<MamotsokoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamotsokoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MamotsokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
