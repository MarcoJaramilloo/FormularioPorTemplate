import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
interface IRegisterForm{
  name:string;
  email:string;
  password: string;
  repeatPass:string;

}

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  register: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    repeatPass:""

  };
  constructor(private authService: AuthService) {}
  submit() {
    console.log('Datos de inicio de sesión');
    console.log(this.register.name);
    console.log(this.register.email);
    console.log(this.register.password);
    console.log(this.register.repeatPass);

    if (this.register.password !== this.register.repeatPass) {
      console.log('LAS CONTRASEÑAS NO SON IGUALES Y NO DEJAR ENVIAR DATOS');
      console.log('Hay que introducir las dos contraseñas iguales para validar');
      return;
    }

    this.authService.login({ email: this.register.email, password: this.register.password }).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        // Aquí puedes manejar la respuesta del servidor, como redirigir al usuario o guardar tokens de autenticación
      },
      error => {
        console.error('Error del servidor:', error);
        // Manejar el error de la solicitud, como mostrar un mensaje de error
      }
    );
  }
}
