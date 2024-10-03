import { Injectable, computed, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoginRequest } from "./models/login-request";
import { User } from "./models/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    #userLoginInput = new BehaviorSubject<LoginRequest | null>(null);
    #loading = signal<boolean>(false);
    loading = computed(this.#loading);
    #currentUser = signal<User | undefined>(undefined);
    currentUser = computed(this.#currentUser);
    #isLoggedIn = signal<boolean>(false);
    isLoggedIn = computed(this.#isLoggedIn);

    constructor() {
        this.userLoginInputSubscription();
    }

    private userLoginInputSubscription(): void {
        this.#userLoginInput.subscribe((input) => { 
            if (input) {
                this.login();
            }
        })
    }

    private login(): void {
       this.#loading.set(true);

       setTimeout(() => {
        this.#currentUser.set({
          username: 'Test User',
          id: 'test'
        });
        this.#isLoggedIn.set(true);
        this.#loading.set(false)
       }, 1000);
    }


    setUserLoginInput(input: LoginRequest): void {
        this.#userLoginInput.next(input);
    }
}