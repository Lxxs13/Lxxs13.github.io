import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../shared/header/header.module';
import { PresentationCardComponent } from '../presentation-card/presentation-card.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeaderModule, PresentationCardComponent, ProjectsSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
