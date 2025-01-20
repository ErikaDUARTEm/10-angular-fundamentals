import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DescriptionComponent } from './components/description/description.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, DescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
