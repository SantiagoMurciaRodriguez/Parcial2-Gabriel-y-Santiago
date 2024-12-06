import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-paisesdetails',
  standalone: true,
  imports: [],
  templateUrl: './paisesdetails.component.html',
  styleUrl: './paisesdetails.component.css'
})
export class PaisesdetailsComponent implements OnInit {
  selectedPais?: any;

  constructor(private route: ActivatedRoute, private paisService: PaisService) {}

  ngOnInit(): void {
    const paisName = this.route.snapshot.params['PaisName'];
    this.paisService.getPais(paisName).subscribe((pais: any) => {
      this.selectedPais = pais;
    });
  }
}
