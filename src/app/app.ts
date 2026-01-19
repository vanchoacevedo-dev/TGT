import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // asegúrate de que sea standalone
  imports: [RouterOutlet, CommonModule], // NgIf necesario para *ngIf
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // CORRECTO: styleUrls (plural)
})
export class App {
  protected readonly title = signal('TGM');

  // TAB seleccionado en sidebar
  selectedMenu = signal<'quienes' | 'servicios' | 'vehiculos' | 'videos' | 'contactos'>('quienes');
}
