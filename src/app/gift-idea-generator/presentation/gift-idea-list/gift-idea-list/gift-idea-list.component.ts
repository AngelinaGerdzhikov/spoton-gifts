import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GiftIdeaList } from '../../../core/models/gift-idea-list';
import { GiftIdeaComponent } from '../../gift-idea/gift-idea/gift-idea.component';

@Component({
  selector: 'sg-gift-idea-list',
  standalone: true,
  imports: [GiftIdeaComponent],
  templateUrl: './gift-idea-list.component.html',
  styleUrl: './gift-idea-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftIdeaListComponent {
  list = input.required<GiftIdeaList>();
}
