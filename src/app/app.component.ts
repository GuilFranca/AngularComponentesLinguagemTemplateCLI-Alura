import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';

interface Contato {
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'indexa';

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto : string = '';
  filtrarContatosPorTexto(): Contato[] {

    if (!this.filtroPorTexto) {
      return this.contatos;
    }

    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().normalize("NFD").includes(this.filtroPorTexto.toLowerCase())
    }) 

  }

  filtrarContatosPorLetraInicial(letra: string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().normalize("NFD").startsWith(letra)
    } )
  }
}
