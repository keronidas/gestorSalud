import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface FormModel {
  nombre: string;
  apellidos: string;
  email: string;
}

@Component({
  selector: 'app-new-profesional',
  templateUrl: './new-profesional.component.html',
  styleUrls: ['./new-profesional.component.scss']
})
export class NewProfesionalComponent {

  formData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log('Datos del formulario:', this.formData.value);
  }
}