<template>
    <Header />

    <router-view style="flex: 1" />
    <CookieAlert v-if="CookieStore.getIsAcceptCookie !== 'accept'" />

    <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CookieAlert from "./components/cookie-alert.vue";
import { useCookieStore } from "@/stores/CookieStore";

export default {
    components: {
        Header,
        Footer,
        CookieAlert,
    },

    data() {
        return {
            CookieStore: useCookieStore(),
        };
    },

    mounted() {
        if (localStorage.getItem("cookie") === null) {
            localStorage.setItem("cookie", 'false');
        }

        this.CookieStore.isAcceptCookie = localStorage.getItem("cookie");
    },
};
</script>

<style lang="scss">
body {
    margin: 0;

    font-size: 18px;
}

p {
    margin: 0;
}

.btn {
    min-width: 120px;
    padding: 15px;

    outline: none;
    border: none;
    border-radius: 10px;
    background: #595959;
    color: #fff;

    font-size: 16px;

    cursor: pointer;

    transition: all 0.35s;

    &:hover {
        background: #666666;
    }
}

#app {
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    position: relative;
}
</style>