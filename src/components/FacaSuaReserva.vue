<template>
    <div class="full">
        <form action method="post" enctype="multipart/form-data">
            <fieldset class="reserva">
                <legend>Faça sua Reserva</legend>
                <span>Do dia</span>
                <input type="date" v-model="checkIn" />
                <span>Até o dia </span>
                <input type="date" v-model="checkOut" />
                <span>Adultos</span>
                <select v-model="qtdAdulto" name="qtdAdultos">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <span>Criança até 12 anos</span>
                <select v-model="qtdCrianca" name="qtdCrianca">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </fieldset>
        </form>
    </div>
</template>
<script>
export default {
    name: "FacaSuaReserva",
    data() {
        return {
            checkIn: "",
            checkOut: "",
            diaria: "",
            qtdAdulto: "",
            qtdCrianca: "",
        };
    },
    watch: {
        checkIn(valor) {
            localStorage.setItem("checkIn", valor);
        },
        checkOut(valor) {
            localStorage.setItem("checkOut", valor);
        },
        qtdAdulto(valor) {
            localStorage.setItem("qtdAdulto", valor);
        },
        qtdCrianca(valor) {
            localStorage.setItem("qtdCrianca", valor);
        },
    },
    mounted() {
        this.checkIn = localStorage.getItem("checkIn");
        this.checkOut = localStorage.getItem("checkOut");
        this.qtdAdulto = localStorage.getItem("qtdAdulto");
        this.qtdCrianca = localStorage.getItem("qtdCrianca");
    },
};
</script>

<style scoped>
* {
    color: #3f362d;
}

.full {
    margin: 0.4rem 0 0rem 0;
}
.reserva {
    margin: 0 auto;
}

fieldset {
    border: 1px solid;
    min-width: none;
    border-radius: 15px;
    border-color: #3f362d;
    font-size: 0.9rem;
    width: 50%;
    border-bottom: 5px solid #6f5f4e;
    border-right: 5px solid #6f5f4e;
}

.input-common,
input[type="date"],
input[type="number"],
select {
    width: auto;
    border: none;
    background: none;
    border-bottom-color: #3f362d;
    color: #6f5f4e;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding: 0 0 0 5px;
    text-align: center;
}
</style>
