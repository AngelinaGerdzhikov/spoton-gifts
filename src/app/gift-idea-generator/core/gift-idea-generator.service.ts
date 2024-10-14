import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, computed, signal } from "@angular/core";
import { environment } from "@env/environment";
import { BehaviorSubject, Observable } from "rxjs";
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
    #errorMessage = signal<string | null>(null);
    errorMessage = computed(this.#errorMessage);

    constructor(private http: HttpClient) {
        this.giftIdeaInputSubscription();
    }

    private giftIdeaInputSubscription(): void {
        this.#giftIdeaInput.subscribe((input) => { 
            if (input) {
                this.fetchIdeasSubscription(input);
            }
        })
    }

    private fetchIdeasObservable(input: GiftIdeaInput): Observable<{content: GiftIdeaList[] }> {
        return this.http.post<{content: GiftIdeaList[] }>(`${environment.apiUrl}/generateGiftIdeas`, { input });
    }

    private fetchIdeasSubscription(input: GiftIdeaInput) {
        this.#loading.set(true);
        this.#errorMessage.set(null);
        this.fetchIdeasObservable(input).subscribe({
            next: (res) => {
                if (res) {
                    this.#giftIdeaResults.set(res.content);
                    this.#loading.set(false)
                }
            },
            error: (err: HttpErrorResponse) => {
                this.#errorMessage.set(err.error.error.message);
                this.#loading.set(false);
            }
        })
    }


    setGiftIdeaInput(input: GiftIdeaInput): void {
        this.#giftIdeaInput.next(input);
    }
}