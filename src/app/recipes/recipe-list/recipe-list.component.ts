import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe [] = [
    new Recipe ('Pacha s luk', 'Sustav: pacha, luk', 'https://novinibg.net/wp-content/uploads/2017/12/Pacha-produkti.jpg'),
    new Recipe ('Pacha s praz', 'Sustav: pacha, praz', 'https://novinibg.net/wp-content/uploads/2017/12/Pacha-produkti.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
