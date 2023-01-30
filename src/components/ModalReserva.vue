<template>
    <div>
        <Button_1 @click="mostrarModal = true"/>
        <div v-if="mostrarModal" class="modal">
            <div class="conteudo-modal">
                <header class="cabecalho-modal">
                    <h3>{{ tituloModal }}</h3>
                    <button @click="mostrarModal = false">Fechar</button>
                </header>
                <section class="corpo-modal">
                    <slot></slot>
                </section>
                <footer class="rodape-modal">
                    <slot name="footer"></slot>
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
        };
    },
    props: {
        tituloModal: {
            type: String,
            required: true,
        },
    },
    components: {
        Button_1,
    }
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

.conteudo-modal {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.cabecalho-modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    margin-bottom: 10px;
}

.cabecalho-modal h3 {
    margin: 0;
}

.corpo-modal {
    flex: 1;
    margin-bottom: 10px;
}

.rodape-modal {
    display: flex;
    justify-content: flex-end;
}
</style>
