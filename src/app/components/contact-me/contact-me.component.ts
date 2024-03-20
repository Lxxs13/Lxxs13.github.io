import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Opciones para el IntersectionObserver
    const options: IntersectionObserverInit = {
      root: null, // El viewport del navegador es el contenedor
      rootMargin: '0px', // No se aplica margen adicional
      threshold: 1 // Cuando al menos el 50% del elemento está en la vista
    };

    // Crear un nuevo IntersectionObserver
    const observer = new IntersectionObserver(this.handleIntersection, options);

    // Elemento que deseas observar
    const miComponente = document.querySelector('#form-main-contact');

    // Observar el elemento
    if (miComponente) {
      observer.observe(miComponente);
    }
  }

  // Método para manejar la entrada en la vista
  private handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si el componente está en la vista, aplicar la animación
        entry.target.classList.add('animate__animated', 'animate__headShake');
        // Una vez que se ha aplicado la animación, ya no necesitamos observar el componente
        observer.unobserve(entry.target);
      }
    });

  }

  ngOnInit(): void {

  }

}
