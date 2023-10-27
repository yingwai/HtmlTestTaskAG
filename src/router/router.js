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
        { path: '/HtmlTestTaskAG/', component: Home },
        { path: '/HtmlTestTaskAG/contacts', component: Contacts },
        { path: '/HtmlTestTaskAG/services', component: Services },
        { path: '/HtmlTestTaskAG/disclaimer', component: Disclaimer },
        { path: '/HtmlTestTaskAG/term', component: Term },
        { path: '/HtmlTestTaskAG/services/:id', component: Product },
        { path: '/HtmlTestTaskAG/conf_order', component: ConfOrder },
        { path: '/HtmlTestTaskAG/cookie', component: Cookie },
    ],
})

export default router;