import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.form = this.formBuild.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  handleRegister() {
    alert(
      '¡Bienvenido ' +
        this.form.value.name +
        ' ' +
        this.form.value.lastName +
        '! Tu cuenta ha sido creada.'
    );
  }

  ngOnInit(): void {}
}
