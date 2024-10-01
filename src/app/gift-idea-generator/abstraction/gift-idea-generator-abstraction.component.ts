import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { GiftIdeaFormComponent } from './../presentation/gift-idea-form/gift-idea-form/gift-idea-form.component';
import { GiftIdeaGeneratorService } from './../core/gift-idea-generator.service';
import { GiftIdeaGeneratorComponent } from "../presentation/gift-idea-generator/gift-idea-generator.component";
import { GiftIdeaInput } from '../core/models/gift-idea-input';
import { GiftIdeaResultsComponent } from '../presentation/gift-idea-results/gift-idea-results/gift-idea-results.component';

@Component({
    selector: 'sg-gift-idea-generator-abstraction',
    standalone: true,
    imports: [
      GiftIdeaGeneratorComponent,
      GiftIdeaFormComponent,
      GiftIdeaResultsComponent
    ],
    templateUrl: './gift-idea-generator-abstraction.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftIdeaGeneratorAbstractionComponent {
  giftIdeaService = inject<GiftIdeaGeneratorService>(GiftIdeaGeneratorService);

  loading = this.giftIdeaService.loading;
  giftIdeaResults = this.giftIdeaService.giftIdeaResults;

  handleGiftIdeaInputSubmitted(input: GiftIdeaInput): void {
    this.giftIdeaService.setGiftIdeaInput(input);
  }
}