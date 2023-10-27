<template>
    <div class="conf_order-container">
        <h2>Благодарим за внимание, скоро мы свяжемся с вами!</h2>

        <div class="service-block">
            <h3>Services</h3>

            <div class="service-list">
                <div
                    v-for="product in ProductStore.getProducts"
                    :key="product.id"
                    @click="fOpenProduct(product)"
                    v-show="product.id < 3"
                >
                    <img :src="product.img" :alt="'product_' + product.id" />
                    <p>{{ product.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";

export default {
    data() {
        return {
            ProductStore: useProductStore(),
        };
    },

    mounted() {
        window.scrollTo(0, 0);
    },

    methods: {
        fOpenProduct(oProduct) {
            this.$router.push("/HtmlTestTaskAG/services/" + oProduct.id);
        },
    }
};
</script>

<style lang="scss" scoped>
h2 {
        font-size: 45px;
    text-align: center;
}

.service-block {
    padding: 20px 20px 80px 20px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h3 {
        margin: 0;
        font-size: 45px;
    }

    .service-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 40px;

        & > div {
            cursor: pointer;
            border-radius: 15px;
            overflow: hidden;

            transition: all 0.35s;

            img {
                border-radius: 15px;
                transition: all 0.75s;
            }

            &:hover {
                transform: scale(105%);
                box-shadow: 0px 0px 15px 0px #0000005c;

                img {
                    transform: scale(98%);
                }
            }
        }

        p {
            margin: 5px 0;
            font-size: 35px;
        }
    }
}
</style>