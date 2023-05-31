import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniqueComponent } from './monique.component';

describe('MoniqueComponent', () => {
  let component: MoniqueComponent;
  let fixture: ComponentFixture<MoniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
