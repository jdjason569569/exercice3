import { TestBed } from '@angular/core/testing';

import { DatosService } from './datos.service';

describe('DatosService', () => {
  let service: DatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('positive numbers', (done: DoneFn) => {
    service.getNumbers$.subscribe((value)=>{
      expect(value).toBeGreaterThan(-1);
      done();
    })
  });


  it('is number', (done: DoneFn) => { 
    service.getNumbers$.subscribe((value)=>{
      expect(value).toEqual(jasmine.any(Number));
      done(); 
    })
  });



});
