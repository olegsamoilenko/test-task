import { defineStore } from 'pinia';

interface State {
    isAuthenticated: boolean;
    error: string | null;
}

interface UserCredentials {
    email: string;
    password: string;
}
export const useAuthStore = defineStore('auth', {
    state: () : State => ({
        isAuthenticated: false,
        error: null,
    }),
    actions: {
        logIn({ email, password }: UserCredentials) {
            const staticEmail = 'admin@admin.com';
            const staticPassword = 'password';

            if (email === staticEmail && password === staticPassword) {
                this.isAuthenticated = true;
                this.error = null;
                return true;
            }else {
                this.error = 'Пароль або логін невірний';
                return false;
            }

        },
        logOut() {
            this.isAuthenticated = false;
        },
    },
    persist: true,
});