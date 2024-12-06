import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  estado: boolean = true;
  
  cambiarview(){
    this.estado = !this.estado;
  }


  mispaises: any = [];
  pais: any; // Define la propiedad pais
  constructor(public paisService: PaisService) {
  }
  ngOnInit(): void {
    this.paisService.obtenerlistaPaises().subscribe((paises: any) => {
      this.mispaises = paises;
      console.log(this.mispaises);
    });
  }
  buscarPais(nombre: string): void {
    this.paisService.getPais(nombre).subscribe((pais: any) => {
      this.pais = pais;
      console.log(this.pais);
    });
  }
}
