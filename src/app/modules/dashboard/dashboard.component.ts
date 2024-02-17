// ANGULAR
import { Component } from '@angular/core';
// SERVICES
import { DolarService } from 'src/app/core/services/dolar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public dolares: any;

  constructor(private dolarService: DolarService) {}

  ngOnInit(): void {
    this.obtenerDolares();
  }

  obtenerDolares() {
    this.dolares = [];
    this.dolarService.obtenerDolares().subscribe(
      (data) => {
        this.dolares = data;
        console.log(this.dolares);
      },
      (error) => {
        console.error('Error al obtener la cotización del dólar:', error);
      }
    );
  }
}
