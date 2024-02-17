// ANGULAR
import { Component, OnInit } from '@angular/core';
// SERVICES
import { DolarService } from 'src/app/core/services/dolar.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public dolares: any;
  public isDarkTheme: boolean = false;

  constructor(
    private dolarService: DolarService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.initTheme();
    this.fetchDolares();
  }

  private initTheme(): void {
    this.isDarkTheme = this.themeService.isDarkThemeActive();
  }

  private fetchDolares(): void {
    this.dolarService.obtenerDolares().subscribe(
      (data) => {
        this.dolares = data;
      },
      (error) => {
        console.error('Error al obtener la cotización del dólar:', error);
      }
    );
  }
}
