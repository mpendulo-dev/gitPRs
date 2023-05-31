import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpenduloComponent } from './mpendulo.component';

describe('MpenduloComponent', () => {
  let component: MpenduloComponent;
  let fixture: ComponentFixture<MpenduloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpenduloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpenduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
