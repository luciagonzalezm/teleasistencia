import {Component, OnInit} from '@angular/core';
import {IDireccion} from "../../interfaces/i-direccion";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaDireccionService} from "../../servicios/carga-direccion.service";
import {Direccion} from "../../clases/direccion";

@Component({
  selector: 'app-nueva-direccion',
  templateUrl: './nueva-direccion.component.html',
  styleUrls: ['./nueva-direccion.component.scss']
})

export class NuevaDireccionComponent implements OnInit {
  public dire: IDireccion;

  constructor(private titleServide: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Crear nueva dirección');
    this.dire = new Direccion();
  }

  nuevaDireccion(): void {
    this.cargaDirecciones.nuevaDireccion(this.dire).subscribe(
      e => {
        console.log('Dirección creada');
        this.router.navigate(['/direcciones']);
      },
      error => {
        console.log(error);
      }
    );
  }
}