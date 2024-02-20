// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';
// LIBRERIAS
import { Subject, Subscription } from 'rxjs';
// SERVICES
import { BreakpointObserverService } from './../../core/services/breakpoint-observer.service';
import { DolarService } from 'src/app/core/services/dolar.service';
import { ThemeService } from 'src/app/core/services/theme.service';
// MODELS
import { Dolar } from 'src/app/core/models/dolar.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {

  private breakpointSubscription: Subscription;
  private componentDestroyed = new Subject<void>();
  public dolaresArray: Array<Dolar> = [];
  public gridColumns: number = 4;
  public isDarkTheme: boolean = false;

  /*************************************/
  /************constructor**************/
  /*************************************/
  constructor(
    private breakpointObserverService: BreakpointObserverService,
    private dolarService: DolarService,
    private themeService: ThemeService
  ) {
    this.breakpointSubscription = this.breakpointObserverService
      .observeBreakpoints()
      .subscribe((screenSize) => {
        this.setGridColumns(screenSize);
      });
  }

  /*************************************/
  /************ngOnInit*****************/
  /*************************************/
  ngOnInit(): void {
    this.initTheme();
    this.fetchDolares();
  }

  /*************************************/
  /************ngOnDestroy**************/
  /*************************************/
  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }

  /*************************************/
  /************setGridColumns***********/
  /*************************************/
  private setGridColumns(screenSize: string): void {
    switch (screenSize) {
      case 'XSmall':
        this.gridColumns = 2;
        break;
      case 'Small':
        this.gridColumns = 3;
        break;
      case 'Medium':
        this.gridColumns = 4;
        break;
      case 'Large':
        this.gridColumns = 5;
        break;
      case 'XLarge':
        this.gridColumns = 6;
        break;
      default:
        this.gridColumns = 4; // Valor por defecto
        break;
    }
  }

  /*************************************/
  /***********initTheme*****************/
  /*************************************/
  private initTheme(): void {
    this.isDarkTheme = this.themeService.isDarkThemeActive();
  }

  /*************************************/
  /************fetchDolares*************/
  /*************************************/
  private fetchDolares(): void {
    this.dolarService.obtenerDolares().subscribe(
      (data) => {
        this.dolaresArray = data;
      },
      (error) => {
        console.error('Error al obtener la cotización del dólar:', error);
      }
    );
  }
}
