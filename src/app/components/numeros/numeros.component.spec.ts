import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosComponent } from './numeros.component';

describe('NumerosComponent', () => {
  let component: NumerosComponent;
  let fixture: ComponentFixture<NumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('positive number', (done: DoneFn) => {

    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.value$.subscribe((value)=>{
      expect(value).toBeGreaterThan(-1);
      done();
    })
  });

});
