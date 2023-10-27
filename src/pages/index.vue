<template>
    <div class="main-container">
        <div class="welcome-block">
            <h2>
                Experience Sparkling <br />
                Cleanliness
            </h2>
            <p>
                Let our professional team transform your home into a spotless
                haven with <br />
                our top-notch cleaning services.
            </p>
            <button class="btn" @click="$router.push('/HtmlTestTaskAG/services')">
                Services
            </button>
        </div>

        <div class="about_us-block">
            <div>
                <h3>About Us</h3>

                <br />

                <p>
                    Welcome to Super Cleaning Home, your premier cleaning
                    service in Belarus. With our expert team of professionals,
                    we are dedicated to providing exceptional cleaning solutions
                    tailored to meet your needs.
                </p>

                <br />

                <p>
                    At Super Cleaning Home, we understand the importance of a
                    clean and healthy environment. Our goal is to exceed your
                    expectations by delivering top-quality cleaning services
                    that leave your home spotless and fresh. Trust us to handle
                    all your cleaning needs with precision, efficiency, and
                    utmost professionalism.
                </p>
            </div>
            <img src="../assets/img_1.png" alt="img_1.png" />
        </div>

        <div class="service-block">
            <h3>Services</h3>
            <div class="service-list">
                <div
                    v-for="product in ProductStore.getProducts"
                    :key="product.id"
                    @click="fOpenProduct(product)"
                >
                    <img :src="product.img" :alt="'product_' + product.id" />
                    <p>{{ product.name }}</p>
                </div>
            </div>
        </div>

        <div class="contact-block">
            <div class="contact-block__desc">
                <h3>Contact Us Today</h3>
                <p>
                    Fill out the form below to get in touch with us. We are here
                    to answer any questions you may have and provide you with
                    the best cleaning services.
                </p>
            </div>
            <div class="contact-block__inpt">
                <div>
                    <div>
                        <p>Name</p>
                        <input
                            type="text"
                            v-model="sName"
                            class="contact-btn"
                        />
                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            type="email"
                            v-model="sEmail"
                            class="contact-btn"
                        />
                    </div>
                </div>

                <div>
                    <p>Message</p>
                    <input
                        type="text"
                        id="message"
                        v-model="sMessage"
                        class="contact-btn"
                    />
                </div>

                <div>
                    <label class="contact-btn">
                        <input
                            type="checkbox"
                            name="contact-checkbox"
                            id="contact-checkbox"
                            v-model="isAccept"
                        />
                        <p>
                            I accept
                            <a
                                href="https://quizzickle.com/privacy_txt.html"
                                target="_blank"
                                >Privacy policy</a
                            >
                        </p>
                    </label>

                    <button class="btn btn-contact" @click="fSendContact()">
                        Send
                    </button>
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
            sName: "",
            sEmail: "",
            sMessage: "",
            isAccept: false,
        };
    },

    mounted() {
        window.scrollTo(0, 0);
    },

    methods: {
        fOpenProduct(oProduct) {
            this.$router.push("/HtmlTestTaskAG/services/" + oProduct.id);
        },
        fSendContact() {
            const aBtn = document.querySelectorAll(".contact-btn");

            if (this.sName.length < 2) {
                aBtn[0].style.borderBottom = "1px solid red";
                return;
            }

            aBtn[0].style.borderBottom = null;

            if (!this.sEmail.includes("@")) {
                aBtn[1].style.borderBottom = "1px solid red";
                return;
            }

            aBtn[1].style.borderBottom = null;

            if (this.sMessage.length < 5) {
                aBtn[2].style.borderBottom = "1px solid red";
                return;
            }

            aBtn[2].style.borderBottom = null;

            if (!this.isAccept) {
                aBtn[3].style.borderBottom = "1px solid red";
                return;
            }

            aBtn[3].style.borderBottom = null;

            this.$router.push('/HtmlTestTaskAG/conf_order');
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss" scoped>
.welcome-block {
    background: url("../assets/background.png") no-repeat;
    height: 665px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 25px;

    h2 {
        margin: 0;
        font-size: 65px;
    }

    p {
        font-size: 30px;
    }
}

.about_us-block {
    padding: 40px 10vw;

    background-color: #f7f7f7;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;

    h3 {
        margin: 0;
        font-size: 45px;
    }

    p {
        font-size: 24px;
    }
}

.service-block {
    padding: 80px 20px;
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

.contact-block {
    padding: 40px 10vw;
    background-color: #f7f7f7;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    &__desc {
        margin-bottom: 6%;

        h3 {
            font-size: 35px;
        }

        p {
            font-size: 20px;
        }
    }

    &__inpt {
        display: flex;
        flex-direction: column;
        gap: 15px;

        input[type="text"],
        input[type="email"] {
            padding: 0 15px;
            min-width: 340px;
            width: calc(100% - 30px);
            height: 35px;

            background-color: #e1e1e1;
            border-radius: 7px;
            outline: none;
            border: none;

            transition: all 0.35s;
        }

        & > div:first-child {
            display: flex;
            gap: 15px;
        }

        & > div:last-child {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        #message {
            height: 95px;
        }

        label {
            display: flex;
            gap: 5px;
        }

        .btn-contact {
            width: 140px;
            align-self: flex-end;
        }
    }
}
</style>