import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import Typed from 'typed.js';

@Component({
  selector: 'app-presentation-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css'
})
export class PresentationCardComponent implements OnInit {
  isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    let typed = new Typed('#expert', {
      strings: ["web apps", "proyectos frontend", "proyectos backend"],
      typeSpeed: 50,
      startDelay: 625,
      backSpeed: 100,
      loop: true,
    });

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isHandset = result.matches;
      });
  }



}
