import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  tipoPokemon: string = 'Cargando...';
  nombrePokemon: string = 'Cargando...';
  vidaPokemon: number = 100;
  ataquePokemon: number = 100;
  defensaPokemon: number = 100;

  constructor(private http: HttpClient) {
    this.getPokemonData(this.pokemonId);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pokemonId']) {
      this.idPokemon = '#' + this.pokemonId.toString().padStart(3, '0');
      this.getPokemonData(this.pokemonId);
    }
  }

  getPokemonData(id: number) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .subscribe({
        next: (data: any) => {
          this.nombrePokemon = this.capitalizeFirstLetter(data.name);
          this.tipoPokemon = this.capitalizeFirstLetter(data.types[0].type.name);
          this.vidaPokemon = data.stats[0].base_stat;
          this.ataquePokemon = data.stats[1].base_stat;
          this.defensaPokemon = data.stats[2].base_stat;
        },
        error: (error) => {
          console.error('Error fetching Pokemon data:', error);
          this.nombrePokemon = 'Error al cargar';
        }
      });
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

