import { Injectable, computed, signal } from "@angular/core";
import { environment } from "@env/environment";
import { BehaviorSubject } from "rxjs";
import { GiftIdeaInput } from "./models/gift-idea-input";
import { GiftIdeaList } from "./models/gift-idea-list";

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
                this.fetchIdeas(input);
            }
        })
    }

    private async fetchIdeas(input: GiftIdeaInput) {
       const url = `${environment.apiUrl}/generateGiftIdeas`;
       this.#loading.set(true);

       try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({ input }),
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const res = await response.json();
        this.#giftIdeaResults.set(res.content);
        this.#loading.set(false)
        console.log(res);
        } catch (error: any) {
            console.error(error);
        }
    }


    setGiftIdeaInput(input: GiftIdeaInput): void {
        this.#giftIdeaInput.next(input);
    }
}