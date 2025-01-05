import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-textbox',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent {
  name: string = '';
  email: string = '';
  cAddress: string = '';
  pAddress: string = '';
  submitted: boolean = false;

  submit() {
    if(this.name === '' || this.email === '' || this.cAddress === '' || this.pAddress === '') {
      alert("Please fill the below fields");
    }
    else {
      this.submitted = true;
    }
  }

  resetFields() {
    this.name = '';
    this.email = '';
    this.cAddress = '';
    this.pAddress = '';
    this.submitted = false;
  }
}


