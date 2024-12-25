import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demoqa-Janu';
  icon1: boolean = false;
  icon2: boolean = false;
  icon3: boolean = false;
  icon4: boolean = false;
  cards: {name:string, icon:string}[] = [
    {
      'name': 'Elements',
      'icon': 'menu'
    },
    {
      'name': 'Forms',
      'icon': 'list_alt'
    },
    {
      'name': 'Alerts, Frame & Windows',
      'icon': 'tab'
    },
    {
      'name': 'Widgets',
      'icon': 'widgets'
    },
    {
      'name': 'Interactions',
      'icon': 'repeat_on'
    },
    {
      'name': 'Book Store Application',
      'icon': 'library_books'
    }
  ]
}




