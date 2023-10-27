<template>
    <div class="header-contaner">
        <div class="header-logo" @click="$router.push('/')">
            <IconLogo />
            <h1>SSSCleaning</h1>
        </div>

        <div class="header-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/contacts">Contacts</router-link>
        </div>
    </div>
</template>

<script>
import IconLogo from "../assets/icons/logo.vue";

export default {
    components: {
        IconLogo,
    }
};
</script>

<style lang="scss" scoped>
.header-contaner {
    background: #f7f7f7;
    color: #565656;
    box-shadow: 0px 0px 15px 0px #0000005c;

    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
}

.header-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;

    h1 {
        color: #248dd8;
    }
}

.header-nav {
    display: flex;
    gap: 30px;

    a {
        color: #565656;
        text-decoration: none;

        transition: all .35s;

        &:hover {
            color: #248dd8;
        }
    }
}
</style>