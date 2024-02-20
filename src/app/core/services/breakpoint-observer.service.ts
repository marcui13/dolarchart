// ANGULAR
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
// LIBRERIAS
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {

  /*************************************/
  /************constructor**************/
  /*************************************/
  constructor(private breakpointObserver: BreakpointObserver) { }

  /*************************************/
  /********observeBreakpoints***********/
  /*************************************/
  observeBreakpoints(): Observable<string> {
    return this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((result) => {
          if (result.breakpoints[Breakpoints.XSmall]) {
            return 'XSmall';
          } else if (result.breakpoints[Breakpoints.Small]) {
            return 'Small';
          } else if (result.breakpoints[Breakpoints.Medium]) {
            return 'Medium';
          } else if (result.breakpoints[Breakpoints.Large]) {
            return 'Large';
          } else if (result.breakpoints[Breakpoints.XLarge]) {
            return 'XLarge';
          } else {
            return 'Unknown';
          }
        })
      );
  }

  /*************************************/
  /**********observeXSmall**************/
  /*************************************/
  observeXSmall(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .pipe(map((result: { matches: any }) => result.matches));
  }

  /*************************************/
  /***********observeSmall**************/
  /*************************************/
  observeSmall(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.Small)
      .pipe(map((result: { matches: any }) => result.matches));
  }

  /*************************************/
  /**********observeMedium**************/
  /*************************************/
  observeMedium(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.Medium)
      .pipe(map((result: { matches: any }) => result.matches));
  }

  /*************************************/
  /*********observeHandset**************/
  /*************************************/
  observeHandset(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map((result) => result.matches));
  }

  /*************************************/
  /**********observeTablet**************/
  /*************************************/
  observeTablet(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.Tablet)
      .pipe(map((result) => result.matches));
  }

  /*************************************/
  /************observeWeb***************/
  /*************************************/
  observeWeb(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.Web)
      .pipe(map((result) => result.matches));
  }
}
