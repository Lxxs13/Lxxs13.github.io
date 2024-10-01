import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required]);
  subjectFormControl = new FormControl('', [Validators.required]);
  messageFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {

  }

  onSendEmail() {
    if (this.emailFormControl.invalid || this.nameFormControl.invalid || this.subjectFormControl.invalid || this.messageFormControl.invalid) {
      this.nameFormControl.markAsTouched();
      this.subjectFormControl.markAsTouched();
      this.messageFormControl.markAsTouched();
      this.emailFormControl.markAllAsTouched();

      return;
    }

    let url = `mailto:luis.quiroz90@gmail.com?subject=${this.subjectFormControl.value}&body=Mensaje de ${this.nameFormControl.value} \n ${this.messageFormControl.value}`;

    window.location.href = url;
  }

}
