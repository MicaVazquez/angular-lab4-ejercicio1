import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected title = 'Calcular';
  protected edadUno: number = 0;
  protected edadDos: number = 0;
  protected suma: number = 0;
  protected promedio: number = 0;

  protected onBtn() {
    this.title = 'change title';
  }

  protected calcularPromedio() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }
  protected limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}
