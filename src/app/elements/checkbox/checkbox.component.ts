import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-checkbox',
  imports: [
    NgIf
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  homeExpand: boolean = false;
  desktopExpand: boolean = false;
  directory = {
    "Home": {
      "Desktop": {
        "Notepad": {},
        "Commands": {}
      },
      "Documents": {
        "WorkSpace": {
          "React": {},
          "Angular": {},
          "Veu": {}
        },
        "Office": {
          "Public": {},
          "Private": {},
          "Classified": {},
          "General": {}
        }
      },
      "Downloads": {
        "Word File.doc": {},
        "Excel File.doc": {}
      }
    }
  }

  expandHome() {
    this.homeExpand = !this.homeExpand;
  }

  expandDesktop() {
    this.desktopExpand = !this.desktopExpand;
  }
}


//Recursive function
// function expandFolder(jsonObject: any, path: string): string[] {
//   if (path.includes('.')) {
//     const key = path.split('.')[0];
//     const _path = path.replace(`${key}.`, '');
//     return expandFolder(jsonObject[key], _path)
//   }
//   return Object.keys(jsonObject[path])
// }
//
// console.log(expandFolder(directory, 'Home.Documents.WorkSpace.React'));
