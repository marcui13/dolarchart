import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme: boolean = false;

  constructor() {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  isDarkThemeActive(): boolean {
    return this.isDarkTheme;
  }
}
