import {Component, ElementRef, Renderer2} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {TextboxComponent} from './textbox/textbox.component';
import {CheckboxComponent} from './checkbox/checkbox.component';

@Component({
  selector: 'app-elements',
  imports: [
    NgForOf,
    TextboxComponent,
    NgIf,
    CheckboxComponent
  ],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  elements: { name: string, icon: string }[] = [
    {
      name: 'Text Box',
      icon: 'a',
    },
    {
      name: 'Check Box',
      icon: 'a',
    },
    {
      name: 'Radio Button',
      icon: 'a',
    },
    {
      name: 'Web Tables',
      icon: 'a',
    },
    {
      name: 'Buttons',
      icon: 'a',
    },
    {
      name: 'links',
      icon: 'a',
    },
    {
      name: 'Broken Links - Images',
      icon: 'a',
    },
    {
      name: 'Upload and Download',
      icon: 'a',
    },
    {
      name: 'Dynamic Properties',
      icon: 'a',
    },
  ]
  header_name: string = '';
  left_menu_btn_click: boolean = false;
  displayTextbox: boolean = false;
  displayCheckbox: boolean = false;
  displayRadioButton: boolean = false;
  displayWebTables: boolean = false;

  accessDropdown() {
    const dropdownIcon = this.el.nativeElement.querySelector('#icon-change');
    const dropdown = this.el.nativeElement.querySelector('.dropdown');
    console.log(dropdown.getAttribute('style'));
    if (dropdown.getAttribute('style').includes('hidden')) {
      this.renderer.setStyle(dropdownIcon, 'transform', 'rotate(180deg)');
      this.renderer.setStyle(dropdown, 'visibility', 'visible');
      this.renderer.setStyle(dropdown, 'transform', 'scaleY(1)');
    } else {
      this.renderer.setStyle(dropdownIcon, 'transform', 'rotate(0deg)');
      this.renderer.setStyle(dropdown, 'visibility', 'hidden');
      this.renderer.setStyle(dropdown, 'transform', 'scaleY(0)');
    }
  }



  openApp(name: string) {
    this.left_menu_btn_click = true;
    const reset = () => {
      this.displayTextbox = false;
      this.displayCheckbox = false;
      this.displayRadioButton = false;
      this.displayWebTables = false;
    }

    switch (name) {
      case 'Text Box':
        reset();
        this.header_name = "Text Box";
        console.log(this.header_name);
        this.displayTextbox = true;
        break;
      case 'Check Box':
        reset();
        this.header_name = "Check Box";
        this.displayCheckbox = true;
        break;
      case 'Radio Button':
        reset();
        this.header_name = "Radio Button";
        this.displayRadioButton = true;
        break;
      case 'Web Tables':
        reset();
        this.header_name = "Web Tables";
        this.displayWebTables = true;
        break;
    }
  }

//   window.addEventListener('load', () => {
//   const dynamicDiv = document.getElementById('dynamicDiv') as HTMLDivElement;
//   if (dynamicDiv) {
//     // Example content to dynamically change the height
//     dynamicDiv.innerHTML = '<p>This is some dynamic content that will change the height of the div.</p>';
//
//     // Adjust the height based on content
//     dynamicDiv.style.height = `${dynamicDiv.scrollHeight}px`;
//   }
// });
}
