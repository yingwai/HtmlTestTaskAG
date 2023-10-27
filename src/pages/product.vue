<template>
    <div class="product-conttainer">
        <div v-if="ProductStore.getCurrentProduct === null">
            <h2 style="text-align: center">Страница продукта не найдена.</h2>
        </div>
        <div class="product-info" v-else>
            <img
                :src="ProductStore.getCurrentProduct?.img"
                :alt="'product_' + ProductStore.getCurrentProduct?.id"
            />
            <div>
                <h2>{{ ProductStore.oCurrentProduct?.name }}</h2>

                <p>
                    <b>About the product</b> <br />
                    {{ ProductStore.oCurrentProduct?.message }}
                </p>

                <div class="product-contact">
                    <p>
                        <b>Order service</b> <br />
                        Contact us to discuss the services provided.
                    </p>

                    <button class="btn" @click="$router.push('/contacts')">Order</button>
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

    async mounted() {
        await this.ProductStore.fGetCurrentProduct(
            Number(this.$route.params.id)
        );

        window.scrollTo(0, 0);
    },
};
</script>

<style lang="scss" scoped>
.product-info {
    padding: 40px 15vw;

    display: flex;
    gap: 40px;

    img {
        border-radius: 10px;
    }

    h2 {
        margin: 0;
        font-size: 35px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    b {
        font-size: 25px;
    }

    p {
        font-size: 20px;
    }

    .product-contact {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>