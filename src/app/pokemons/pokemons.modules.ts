import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './directives/border-card.directive';

import { FormsModule } from '@angular/forms';

import { PokemonRoutingModule } from './pokemons-routing.module';

import { PokemonsService } from './pokemon.service';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
//import { AuthGuard } from '../login/auth.guard.service';
//import { AuthService } from '../login/auth.service';
import { LoaderComponent } from './loader.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
//import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

@NgModule({
  declarations: [
    EditPokemonComponent,
    PokemonsComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    LoaderComponent,
    FormPokemonComponent,
    AddPokemonComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [PokemonsService,
    //AuthGuard,
    //AuthService
  ]
  
})
export class PokemonsModule { }
