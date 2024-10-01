import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GiftIdeaList } from '../../../core/models/gift-idea-list';
import { SectionComponent } from '../../../../ui/components/section/section/section.component';
import { GiftIdeaListComponent } from '../../gift-idea-list/gift-idea-list/gift-idea-list.component';

@Component({
  selector: 'sg-gift-idea-results',
  standalone: true,
  imports: [
    SectionComponent,
    GiftIdeaListComponent
  ],
  templateUrl: './gift-idea-results.component.html',
  styleUrl: './gift-idea-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftIdeaResultsComponent {
  loading = input<boolean>(false);
  giftIdeaResults = input<GiftIdeaList[]>([]);
  position = computed(() => {
    if (this.loading() || this.giftIdeaResults().length === 0) {
      return 'center'
    } else {
      return 'left'
    }
  })
}
