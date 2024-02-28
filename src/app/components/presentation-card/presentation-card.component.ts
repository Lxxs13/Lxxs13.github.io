import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

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
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isHandset = result.matches;
      });
  }

}
