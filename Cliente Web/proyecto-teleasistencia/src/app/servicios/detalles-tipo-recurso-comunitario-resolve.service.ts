import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ITipoRecursoComunitario} from '../interfaces/i-tipo-recurso-comunitario';
import {CargaTipoRecursoComunitarioService} from './carga-tipo-recurso-comunitario.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DetallesTipoRecursoComunitarioResolveService implements Resolve<ITipoRecursoComunitario> {

  constructor(private cargaTiposRecursosComunitarios: CargaTipoRecursoComunitarioService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoRecursoComunitario> {
    return this.cargaTiposRecursosComunitarios.getTipoRecursoComunitario(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
