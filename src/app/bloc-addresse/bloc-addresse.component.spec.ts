import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocAddresseComponent } from './bloc-addresse.component';

describe('BlocAddresseComponent', () => {
  let component: BlocAddresseComponent;
  let fixture: ComponentFixture<BlocAddresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocAddresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocAddresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
