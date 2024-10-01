import { Component } from '@angular/core';
import { BackgroundImageWithOverlay } from '../../../ui/directives/background-image-with-overlay/background-image-with-overlay.directive';
import { SectionComponent } from "../../../ui/components/section/section/section.component";
import { GiftIdeaFormComponent } from "../gift-idea-form/gift-idea-form/gift-idea-form.component";

@Component({
  selector: 'sg-gift-idea-generator',
  standalone: true,
  imports: [
    BackgroundImageWithOverlay,
    SectionComponent,
    GiftIdeaFormComponent
  ],
  templateUrl: './gift-idea-generator.component.html',
  styleUrl: './gift-idea-generator.component.scss'
})
export class GiftIdeaGeneratorComponent {}
