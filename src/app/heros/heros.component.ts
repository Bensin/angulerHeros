import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROS } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero : Hero ={
    id:1,
    name:"Windstorm"
  };

  heros : Hero[];

  //onSelectedHero : Hero;

  // onSelect(hero:Hero) : void {
  //  this.onSelectedHero = hero;
  // }

  constructor(private heroService :HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
   this.heroService.getHeros().subscribe(
      heros => this.heros = heros
    );
  }

}
