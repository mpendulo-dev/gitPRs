import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamogeloComponent } from './kamogelo.component';

describe('KamogeloComponent', () => {
  let component: KamogeloComponent;
  let fixture: ComponentFixture<KamogeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamogeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamogeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
