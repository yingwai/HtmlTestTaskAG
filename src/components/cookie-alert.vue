<template>
    <div class="cookie-container">
        <div class="cookie-alert">
            <p>
                Our site uses scripts, including cookies, to store and process
                information in your browser. This may include your personal
                data. We use this information for security, site improvement,
                and marketing. You can restrict the processing by selecting only
                the necessary cookies. By continuing to use the site, you agree
                to our <router-link to="/cookie">cookie policy</router-link>.
            </p>

            <button class="btn cookie-btn" @click="fAcceptCookie()">
                <b>Accept</b>
            </button>
        </div>
    </div>
</template>

<script>
import { useCookieStore } from "@/stores/CookieStore";

export default {
    data() {
        return {
            CookieStore: useCookieStore(),
        };
    },

    methods: {
        fAcceptCookie() {
            localStorage.setItem("cookie", "accept");

            this.CookieStore.isAcceptCookie = localStorage.getItem("cookie");
        },
    },
};
</script>

<style lang="scss" scoped>
.cookie-container {
    width: 100vw;
    display: flex;
    justify-content: center;
}

.cookie-alert {
    width: 60%;
    padding: 10px 20px;

    border-radius: 25px;
    background: #595959;
    color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    position: fixed;
    bottom: 10px;

    a {
        color: skyblue;
    }

    .cookie-btn {
        background: #fff;
        color: #000;
    }
}
</style>