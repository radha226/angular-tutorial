import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  constructor() { }
  hero:Hero={
    id:1,
    name:'testing'
  }
  ngOnInit() {
    console.log(this.heroes)
  }
  onSelect(hero){
    console.log(hero);
    this.selectedHero=hero;
  }

}

