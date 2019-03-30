import { Injectable } from '@angular/core';

import {Observable,of} from 'rxjs';

import { Hero } from './hero';
import { HEROS } from './mock-heros';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeros():Observable<Hero[]>{

    this.messageService.add('Hero Service:fetched heros');
    return of(HEROS);
  }

  getHero(id:number):Observable<Hero>{
    this.messageService.add('hero service :fetched with id');
    return of(HEROS.find(hero => hero.id === id));

  }
}
