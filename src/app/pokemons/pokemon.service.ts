import { Injectable } from '@angular/core';

import { Pokemon } from './donnees-pokemons/pokemon';
import { LISTPOKEMONS } from './donnees-pokemons/mock-pokemons';
import { Observable, of } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class PokemonsService{

  pokemon : any = null;

  private pokemonsUrl = 'api/pokemons';
  
  constructor(private route :ActivatedRoute,private router: Router,/*private http: HttpClient*/){}


  getPokemons(): Pokemon[]{
    return LISTPOKEMONS;
  }

  getPokemon(id: number){
    let pokemons = this.getPokemons();
    for (let index = 0; index< pokemons.length; index++){
      if(id == pokemons[index].id){
      return pokemons[index];
      }
    }
    return false;
  }

  getPokemonsTypes(): string[]{
    return ['Plante', 
            'Feu', 
            'Eau', 
            'Insecte', 
            'Normal', 
            'Electrik', 
            'Poison', 
            'Fée', 
            'Vol',
            'spectre'];
  }

  goBack(pokemon: Pokemon){
    let link: any = [];
    if(pokemon){
      //console.log(pokemon);
      link = ['/pokemon', pokemon.id];
    }else{
      link = ['/pokemon/all'];
    }
    this.router.navigate(link);
    
  }

  /** POST pokemon */
	addPokemon(pokemon: Pokemon): Observable<Pokemon> {
		/*const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
			tap((pokemon: Pokemon) => this.log(`added pokemon with id=${pokemon.id}`)),
			catchError(this.handleError<Pokemon>('addPokemon'))
    );*/
    return;
	}

	/* GET pokemons search */
	searchPokemons(term: string): Observable<Pokemon[]> {
		if (!term.trim()) {
			// si le terme de recherche n'existe pas, on renvoie un tableau vide.
			return of([]);
		}

		/*return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
			tap(_ => this.log(`found pokemons matching "${term}"`)),
			catchError(this.handleError<Pokemon[]>('searchPokemons', []))
    );*/
    
	}


   /* handlerror */ 
  private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);

			return of(result as T);
		};
	}

	/* log */
	private log(log: string) {
		console.info(log);
	}

}