import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HeadComponent } from './components/head/head.component';
import { LegsComponent } from './components/legs/legs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BodyComponent,HeadComponent,LegsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclope';
}
