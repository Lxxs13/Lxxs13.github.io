import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isHandset = result.matches;
      });
  }

  toggleMenu() {
    // Implementa la lógica para mostrar/ocultar el menú en dispositivos móviles
    // Puedes utilizar un servicio para comunicarte con el componente principal o emitir un evento.
  }

  showNavigation(): boolean {
    // Devuelve true si el dispositivo no es un dispositivo móvil (es decir, es de escritorio)
    return !this.isHandset;
  }

}
