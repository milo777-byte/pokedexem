import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraphComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  pokemonId: number = 1; // Cambiado a 1 para empezar desde el primer pokemon
  pokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonId + '.png';

  changePokemon(evento: number): void {
    this.pokemonId += evento;
    if(this.pokemonId < 1){
      this.pokemonId = 1; // Aseguramos que no baje de 1
    }
    this.pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonId + '.png';
  }
}
