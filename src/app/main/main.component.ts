import { Component } from '@angular/core';
import { BackgroundComponent } from '../components/background/background.component';
import { HomeComponent } from "../components/home/home.component";
import { DescriptionComponent } from '../components/description/description.component';

@Component({
  selector: 'app-main',
  imports: [BackgroundComponent, HomeComponent, DescriptionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
