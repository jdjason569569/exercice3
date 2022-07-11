import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  value$ = this.datosService.getNumbers$;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
  }

}
