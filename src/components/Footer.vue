<template>
    <div class="footer-container">
        <div class="footer-contacts">
            <a
                href="https://www.google.com/maps/place/ул.+Тимирязева+67,+Минск+220035/@53.9252452,27.5083583,15z/data=!4m6!3m5!1s0x46dbc56c6b46c34f:0xb4592a0d073badb1!8m2!3d53.9251696!4d27.5088735!16s%2Fg%2F11gr83fh8h?entry=ttu"
                target="_blank"
                >ул. Тимирязева 67</a
            >
            <a href="https://звонки.онлайн/" target="_blank"
                >+375 (29) 554 81 72</a
            >
            <a
                href="https://www.google.com/intl/ru/gmail/about/"
                target="_blank"
                >support@SSSCleaning.com</a
            >
        </div>

        <div class="footer-logo" @click="$router.push('/')">
            <IconLogo />
            <h1>SSSCleaning</h1>
        </div>

        <div class="footer-nav">
            <a href="https://quizzickle.com/privacy_txt.html" target="_blank"
                >Privacy policy</a
            >
            <router-link to="/term">Terms & Conditions</router-link>
            <router-link to="/disclaimer">Disclaimer</router-link>
        </div>
    </div>
</template>

<script>
import IconLogo from "../assets/icons/logo.vue";

export default {
    components: {
        IconLogo,
    },
};
</script>

<style lang="scss" scoped>
.footer-container {
    padding: 30px 10vw;
    background: #f7f7f7;
    color: #565656;
    box-shadow: 0px 0px 15px 0px #0000005c;

    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
}

.footer-contacts,
.footer-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    a {
        color: #565656;
        text-decoration: none;

        transition: all 0.35s;

        &:hover {
            color: #248dd8;
        }
    }
}

.footer-logo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;

    h1 {
        margin: 0;
        color: #248dd8;
    }
}
</style>