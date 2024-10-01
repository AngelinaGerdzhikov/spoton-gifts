import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GiftIdea } from '../../../core/models/gift-idea';

@Component({
  selector: 'sg-gift-idea',
  standalone: true,
  imports: [],
  templateUrl: './gift-idea.component.html',
  styleUrl: './gift-idea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftIdeaComponent {
  giftIdea = input.required<GiftIdea>();
  index = input.required<number>();
}
