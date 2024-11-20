import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [RouterModule], // Agrega RouterModule aquí
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class TablesComponent {
  // Tu lógica aquí, si la tienes
}
