// ANGULAR
import { Component } from '@angular/core';
// SERVICES
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dolar Chart';

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme(); // Llama al método toggleTheme() en el servicio de tema
  }
}
