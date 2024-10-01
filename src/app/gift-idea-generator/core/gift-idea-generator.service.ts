import { Injectable, computed, signal } from "@angular/core";
import { GiftIdeaInput } from "./models/gift-idea-input";
import { GiftIdeaList } from "./models/gift-idea-list";
import { GIFT_IDEAS_LISTS } from './data';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GiftIdeaGeneratorService {
    #giftIdeaInput = new BehaviorSubject<GiftIdeaInput | null>(null);
    #loading = signal<boolean>(false);
    loading = computed(this.#loading);
    #giftIdeaResults = signal<GiftIdeaList[]>([]);
    giftIdeaResults = computed(this.#giftIdeaResults);

    constructor() {
        this.giftIdeaInputSubscription();
    }

    private giftIdeaInputSubscription(): void {
        this.#giftIdeaInput.subscribe((input) => { 
            if (input) {
                this.fetchIdeas();
            }
        })
    }

    private fetchIdeas(): void {
       this.#loading.set(true);

       setTimeout(() => {
        this.#giftIdeaResults.set(GIFT_IDEAS_LISTS);
        this.#loading.set(false)
       }, 1000);
    }


    setGiftIdeaInput(input: GiftIdeaInput): void {
        this.#giftIdeaInput.next(input);
    }
}