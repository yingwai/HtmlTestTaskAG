import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            aProducts: [
                {
                    id: 0,
                    name: "Residential Cleaning",
                    message:
                        "Our professional cleaners ensure cleanliness and comfort in your home. We offer a full range of residential cleaning services, including cleaning of rooms, kitchens, bathrooms, and more. We take care of your home as if it were our own, making it a place you'll always be happy to return to.",
                    img: "../../product_1.png",
                },
                {
                    id: 1,
                    name: "Commercial Cleaning",
                    message:
                        "Our commercial cleaning is designed to keep professional environments in their best condition. We provide cleaning services for offices, shops, restaurants, and other commercial properties. Our goal is to maintain cleanliness and order in your workspace, promoting productivity and leaving a positive impression on clients and employees.",
                    img: "../../product_2.png",
                },
                {
                    id: 2,
                    name: "Carpet Cleaning",
                    message:
                        "Our professional carpet cleaning technicians will refresh and restore the appearance of your carpets. We use advanced methods and equipment to remove stains, dirt, and unpleasant odors, leaving your carpets clean, soft, and safe for your health.",
                    img: "../../product_3.png",
                },
                {
                    id: 3,
                    name: "Window Cleaning",
                    message:
                        "Clean windows give your home or business an elegant look and allow more light to penetrate inside. Our window cleaning specialists ensure perfect glass transparency by removing dirt, dust, and streaks. You can enjoy bright views and cleanliness indoors.",
                    img: "../../product_4.png",
                },
                {
                    id: 4,
                    name: "Move-in/Move-out Cleaning",
                    message:
                        "Our move-in and move-out cleaning provides the perfect solution for landlords and tenants. We meticulously clean every corner to ensure that new occupants have a perfectly clean home upon moving in. When moving out, we assist tenants in returning the property to its original condition, ensuring the return of their security deposit.",
                    img: "../../product_5.png",
                },
                {
                    id: 5,
                    name: "Post-Construction Cleaning",
                    message:
                        "Post-construction cleaning is an essential step in completing construction projects. We remove construction debris, dust, and dirt, leaving the area clean and ready for use. Our professionals perform post-construction cleaning with precision and attention to detail to provide a safe and clean environment.",
                    img: "../../product_6.png",
                },
            ],
            oCurrentProduct: null,
        };
    },
    actions: {
        fGetCurrentProduct(idProduct) {
            this.aProducts.forEach(el => {
                if (el.id === idProduct) {
                    this.oCurrentProduct = el;
                }
            });
        }
    },

    getters: {
        getProducts() {
            return this.aProducts;
        },
        getCurrentProduct() {
            return this.oCurrentProduct;
        }
    },
});
