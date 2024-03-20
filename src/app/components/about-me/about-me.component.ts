import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Opciones para el IntersectionObserver
    const options: IntersectionObserverInit = {
      root: null, // El viewport del navegador es el contenedor
      rootMargin: '0px', // No se aplica margen adicional
      threshold: 1 // Cuando al menos el 50% del elemento está en la vista
    };

    // Crear un nuevo IntersectionObserver
    const observer = new IntersectionObserver(this.handleIntersection, options);

    // Elementos que deseas observar (seleccionados por clase)
    const imagenes = document.querySelectorAll('.img-tech');

    // Observar cada imagen
    imagenes.forEach((img, index) => {
      observer.observe(img);
      img.classList.add(`delay-${index + 1}`);
    });
  }

  // Método para manejar la entrada en la vista
  private handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si la imagen está en la vista, aplicar la animación
        entry.target.classList.add('animate__animated', 'animate__zoomIn');
        // Una vez que se ha aplicado la animación, ya no necesitamos observar la imagen
        observer.unobserve(entry.target);
      }
    });
  }
}
