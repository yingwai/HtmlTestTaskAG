<template>
    <div class="contacts-container">
        <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6645.00988785166!2d27.508358254256976!3d53.92524522494718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc56c6b46c34f%3A0xb4592a0d073badb1!2z0YPQuy4g0KLQuNC80LjRgNGP0LfQtdCy0LAgNjcsINCc0LjQvdGB0LogMjIwMDM1!5e0!3m2!1sru!2sby!4v1698354883908!5m2!1sru!2sby"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div class="contact-block">
            <h2>Contact Us</h2>
            <div>
                <p>Name</p>
                <input type="text" v-model="sName" class="contact-btn" />
            </div>
            <div>
                <p>Email</p>
                <input type="email" v-model="sEmail" class="contact-btn" />
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

        <div class="list-contact">
            <div @click="fOpenContact('adress')">
                <b>Address Location</b>
                <p>ул. Тимирязева 67</p>
            </div>
            <div @click="fOpenContact('phone')">
                <b>Telephone number</b>
                <p>+375 (29) 554 81 72</p>
            </div>
            <div @click="fOpenContact('email')">
                <b>Postal address</b>
                <p>support@SSSCleaning.com</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
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

            this.$router.push("/HtmlTestTaskAG/conf_order");
            window.scrollTo(0, 0);
        },
        fOpenContact(sTab) {
            if (sTab === "adress") {
                window.open(
                    "https://www.google.com/maps/place/ул.+Тимирязева+67,+Минск+220035/@53.9252452,27.5083583,15z/data=!4m6!3m5!1s0x46dbc56c6b46c34f:0xb4592a0d073badb1!8m2!3d53.9251696!4d27.5088735!16s%2Fg%2F11gr83fh8h?entry=ttu"
                );
                return;
            }

            if (sTab === "phone") {
                window.open("https://звонки.онлайн/");
                return;
            }

            if (sTab === "email") {
                window.open("https://www.google.com/intl/ru/gmail/about/");
                return;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.map {
    width: 100%;
    height: 600px;
}

.contact-block {
    padding: 20px 20vw 20px 20vw;

    background-color: #f7f7f7;

    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
        margin: 0;
        text-align: center;
        font-size: 35px;
    }

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
    }

    #message {
        height: 95px;
    }

    & > div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
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

.list-contact {
    padding: 40px 20vw 40px 20vw;

    display: flex;
    justify-content: space-between;
    gap: 40px;

    & > div {
        cursor: pointer;
        width: 100%;
        height: 250px;

        border-radius: 10px;
        box-shadow: 0px 0px 15px 0px #0000005c;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        transition: all 0.35s;

        b {
            font-size: 30px;
        }

        p {
            font-size: 22px;
        }

        &:hover {
            transform: scale(105%);
        }
    }
}
</style>