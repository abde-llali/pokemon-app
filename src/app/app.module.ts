import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found.component';
import { FormsModule } from '@angular/forms';
import { PokemonsModule } from './pokemons/pokemons.modules';
import { LoginComponent } from './login/login.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './pokemons/in-memory-data.service';
import { LoginRoutingModule } from './login/loging-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PokemonsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    LoginRoutingModule,
    
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
