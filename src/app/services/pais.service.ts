import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor(private http: HttpClient) {}

  obtenerlistaPaises(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all').pipe(
      map((ListaDePaises: any) => {
        return ListaDePaises.map((auxPais: any) => {
          return {
            nombre: auxPais.name.common,
            capital: auxPais.capital,
            region: auxPais.region,
            bandera: auxPais.flags.svg,
            area: auxPais.area,
            mapa: auxPais.maps.googleMaps,
            poblacion: auxPais.population
          };
        });
      })
    );
  }
  getPais(nombre: string): Observable<any> {
    return this.obtenerlistaPaises().pipe(
      map((paises: any[]) => paises.find(pais => pais.nombre.toLowerCase() === nombre.toLowerCase()))
    );
  }
}
