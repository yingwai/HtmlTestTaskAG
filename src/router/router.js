import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";
import Contacts from "@/pages/contacts.vue";
import Services from "@/pages/services.vue";
import Disclaimer from "@/pages/disclaimer.vue";
import Term from "@/pages/term.vue";
import Product from "@/pages/product.vue";
import ConfOrder from "@/pages/conf_order.vue";
import Cookie from "@/pages/cookie.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/contacts', component: Contacts },
        { path: '/services', component: Services },
        { path: '/disclaimer', component: Disclaimer },
        { path: '/term', component: Term },
        { path: '/services/:id', component: Product },
        { path: '/conf_order', component: ConfOrder },
        { path: '/cookie', component: Cookie },
    ],
})

export default router;