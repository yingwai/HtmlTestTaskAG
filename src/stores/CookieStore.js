import { defineStore } from "pinia";

export const useCookieStore = defineStore("CookieStore", {
    state: () => {
        return {
            isAcceptCookie: false,
        };
    },
    actions: {
        
    },

    getters: {
        getIsAcceptCookie() {
            return this.isAcceptCookie;
        }
    },
});
