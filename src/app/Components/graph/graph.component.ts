import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnChanges {
  @Input() pokemonId: number = 1;
  idPokemon: string = '#001';
  tipoPokemon: string = 'Fuego 🔥';
  nombrePokemon: string = 'Dome eres el lov of my life';
  vidaPokemon: number = 100;
  ataquePokemon: number = 100;
  defensaPokemon: number = 100;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pokemonId']) {
      this.idPokemon = '#' + this.pokemonId.toString().padStart(3, '0');
    }
  }

  getHealthBarClass(): string {
    if (this.vidaPokemon > 70) {
      return 'health-high';
    } else if (this.vidaPokemon > 30) {
      return 'health-medium';
    } else {
      return 'health-low';
    }
  }

  bajarVida(cantidad: number): void {
    this.vidaPokemon = Math.max(0, this.vidaPokemon - cantidad);
  }
}

