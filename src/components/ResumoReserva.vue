<template>
    <div class="fullDiv">
        <div class="titleDiv">
            <h2 class="totalTitle">Total</h2>
            <h2 class="valorTitle">R$ 1200</h2>
            <ModalReserva/>
        </div>
        <div class="resultsDiv">
            <h4>Check-in: {{ checkIn }}</h4>
            <h4>Check-out: {{ checkOut }}</h4>
            <h4>Diárias: {{ diarias }}</h4>
            <h4>Adultos: {{ qtdAdultos }}</h4>
            <h4>Crianças: {{ qtdCrianca }}</h4>
        </div>
    </div>
</template>
<script>
import ModalReserva from "./ModalReserva.vue";

export default {
    name: "ResumoReserva",
    data() {
        return {
            checkIn: "",
            checkOut: "",
            diarias: "",
            qtdAdultos: "",
            qtdCrianca: "",
        };
    },
    components: {
        ModalReserva,
    },
};
</script>
<style scoped>
h4 {
    color: #3f362d;
}

.fullDiv {
    position: sticky;
    top: 2%;
    margin: 1rem 0 0 15px;
}

.titleDiv {
    background-color: #3f362d;
    border: 1px solid #3f362d;
    border-radius: 15px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.totalTitle,
.valorTitle {
    color: #fff3f1;
}

.valorTitle {
    margin: -40px 0 0 0;
}

.totalTitle {
    margin: -10px 0 0 0;
}

.button {
    background-color: #fff3f1;
    color: #3f362d;
    margin: -10px 0 20px 0;
}

.resultsDiv {
    background-color: #fff3f1;
    border: 1px solid #3f362d;
    border-radius: 15px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}
</style>
