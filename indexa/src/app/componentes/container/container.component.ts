import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container', // Define o nome da tag seletora
  standalone: true, // Define se é um component independente
  imports: [CommonModule], // Os imports do component, no caso ao comandos padrões do Angular
  templateUrl: './container.component.html', // Onde o html do component se encontra
  styleUrl: './container.component.css' // Onde o estilo do component se encontra
})
export class ContainerComponent {

}
