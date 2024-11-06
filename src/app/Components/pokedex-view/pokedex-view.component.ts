import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraphComponent, FormsModule],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  pokemonId: number = 1;
  pokemonImagen: string = '';
  searchId: number | null = null;

  ngOnInit() {
    this.updatePokemonImage();
  }

  changePokemon(evento: number): void {
    this.pokemonId += evento;
    if (this.pokemonId < 1) {
      this.pokemonId = 1;
    }
    this.updatePokemonImage();
  }

  searchPokemon(): void {
    if (this.searchId && this.searchId > 0) {
      this.pokemonId = this.searchId;
      this.updatePokemonImage();
    }
  }

  private updatePokemonImage(): void {
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  }
}
