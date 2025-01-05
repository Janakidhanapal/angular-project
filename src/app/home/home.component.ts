import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  icon1: boolean = false;
  icon2: boolean = false;
  icon3: boolean = false;
  icon4: boolean = false;
  cards: {name:string, icon:string, url:string}[] = [
    {
      'name': 'Elements',
      'icon': 'menu',
      'url': 'elements'
    },
    {
      'name': 'Forms',
      'icon': 'list_alt',
      'url': 'forms'
    },
    {
      'name': 'Alerts, Frame & Windows',
      'icon': 'tab',
      'url': 'alertsWindows'
    },
    {
      'name': 'Widgets',
      'icon': 'widgets',
      'url': 'widgets'
    },
    {
      'name': 'Interactions',
      'icon': 'repeat_on',
      'url': 'interactions'
    },
    {
      'name': 'Book Store Application',
      'icon': 'library_books',
      'url': 'books'
    }
  ]

}
