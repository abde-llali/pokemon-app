import { Component, OnInit } from '@angular/core';
import { LISTPOKEMONS } from './pokemons/donnees-pokemons/mock-pokemons';
import { Pokemon } from './pokemons/donnees-pokemons/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
  pokemons: any;
 
  ngOnInit() {
    this.pokemons = LISTPOKEMONS;
  }
 
  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
  }
   
}
