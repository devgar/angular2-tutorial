import { Component, Input } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./app.component.css']
})
export class HeroListComponent {
  @Input()
  heroes: Hero[];
  
  @Input()
  chosen: Hero;
  
  onSelect(hero: Hero): void {
    this.chosen = hero;
  }
}
