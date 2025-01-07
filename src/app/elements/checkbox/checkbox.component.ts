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

  rotateHomeArrow: number = 0;
  homeExpand: boolean = false;
  homeChecked: boolean = false;

  desktopExpand: boolean = false;
  rotateDesktopArrow: number = 0;
  desktopChecked: boolean = false;

  documentExpand: boolean = false;
  WorkSpaceExpand: boolean = false;
  OfficeExpand: boolean = false;
  downloadExpand: boolean = false;
  value: string = '';

  expandHome() {
    let parentCheckbox = document.getElementById('parentCheckbox') as HTMLInputElement;
    const childCheckboxes = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;

    parentCheckbox.addEventListener('change', () => {
      childCheckboxes.forEach(childCheckbox => {
        childCheckbox.checked = parentCheckbox.checked;
      });
    });
  }

  //   if(element.checked) {
  //     // let value = document.getElementsByTagName('span')[2].innerHTML;
  //     this.value = homeElement.value;
  //   }
  //   return null;


  expandDesktop() {
    this.desktopExpand = !this.desktopExpand;
  }

  expandDocument() {
    this.documentExpand = !this.documentExpand;
  }

  expandWorkSpace() {
    this.WorkSpaceExpand = !this.WorkSpaceExpand;
  }

  expandOffice() {
    this.OfficeExpand = !this.OfficeExpand;
  }

  expandDownloads() {
    this.downloadExpand = !this.downloadExpand;
  }

  //   document.addEventListener('DOMContentLoaded', () => {
  //   const parentCheckbox = document.getElementById('parentCheckbox') as HTMLInputElement;
  //   const childCheckboxes = document.querySelectorAll('.childCheckbox') as NodeListOf<HTMLInputElement>;
  //
  //   parentCheckbox.addEventListener('change', () => {
  //   childCheckboxes.forEach(childCheckbox => {
  //   childCheckbox.checked = parentCheckbox.checked;
  // });
  // });
  // });

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
