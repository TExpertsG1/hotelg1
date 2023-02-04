<template>
    <div>
        <Button_1 @change="update" @click="mostrarModal = true" />
        <div v-if="mostrarModal" class="modal">
            <div class="conteudoModal">
                <header class="headerModal">
                    <h3 class="titulo">{{ tituloModal }}</h3>
                    <button class="fecharButton" @click="mostrarModal = false">
                        X
                    </button>
                </header>
                <section class="corpoModal">
                    <slot>
                        Check-in: {{ checkIn }} <br />
                        Check-out: {{ checkOut }} <br />
                        Quantidade de adultos: {{ qtdAdulto }} <br />
                        Quantidade de crianças: {{ qtdCrianca }}
                    </slot>
                </section>
                <footer class="footerModal">
                    <Button_1 class="confirmar" />
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import Button_1 from "./Button_1.vue";

export default {
    name: "ModalReserva",
    data() {
        return {
            mostrarModal: false,
            tituloModal: "Resumo da Reserva",
            checkIn: localStorage.getItem("checkIn"),
            checkOut: localStorage.getItem("checkOut"),
            qtdAdulto: localStorage.getItem("qtdAdulto"),
            qtdCrianca: localStorage.getItem("qtdCrianca"),
            servicosAdicionaisSuite1: [],
            servicosAdicionaisSuite2: [],
            servicosAdicionaisSuite3: [],
        };
    },
    watch: {
        checkIn(valor) {
            this.checkIn = valor;
        },
        checkOut(valor) {
            this.checkOut = valor;
        },
        qtdAdulto(valor) {
            this.qtdAdulto = valor;
        },
        qtdCrianca(valor) {
            this.qtdCrianca = valor;
        },
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {
            this.checkIn = localStorage.getItem("checkIn");
            this.checkOut = localStorage.getItem("checkOut");
            this.qtdAdulto = localStorage.getItem("qtdAdulto");
            this.qtdCrianca = localStorage.getItem("qtdCrianca");
        },
    },
    components: {
        Button_1,
    },
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.headerModal h3 {
    padding: 0 0 0 35px;
    text-align: center;
    width: 100%;
}

.conteudoModal {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.headerModal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    margin-bottom: 10px;
}

.headerModal h3 {
    margin: 0;
}

.corpoModal {
    flex: 1;
    margin-bottom: 10px;
}

.footerModal {
    display: flex;
    justify-content: center;
}

.fecharButton {
    margin: 0 0 20px 0;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 15px;
    font-weight: bold;
    background-color: #3f362d;
    color: #fff3f1;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.fecharButton:hover {
    background-color: #716152;
}

.confirmar {
    margin: 0;
    text-align: center;
    width: 30%;
    font-size: 15px;
    font-weight: bold;
    background-color: #3f362d;
    color: #fff3f1;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

@media (max-width: 800px) {
    .conteudoModal {
        width: 80%;
    }
    .fecharButton {
        margin: 0;
    }

    .confirmar {
        margin: 0;
        width: 50%;
    }
}
</style>
