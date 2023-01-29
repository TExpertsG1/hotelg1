<template>
    <div class="inputReserva principal">
        <form action method="post" enctype="multipart/form-data">
            <fieldset class="reserva">
                <legend>Faça sua Reserva</legend>
                <span>Do dia</span>
                <input
                    v-model="checkIn"
                    type="date"
                    @input="emitUpdateCheckIn"
                />
                <span>Até o dia </span>
                <input
                    v-model="checkOut"
                    type="date"
                    @input="emitUpdateCheckOut"
                />
                <span>Adultos</span>
                <select id="qtdAdultos" name="qtdAdultos">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <span>Criança até 12 anos</span>
                <select id="qtdCrianca" name="qtdCrianca">
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
            qtdAdultos: "",
            qtdCrianca: "",
        };
    },
};
</script>

<style scoped>
.reserva {
    margin: 0 auto;
}

fieldset {
    border: 1px solid;
    min-width: none;
    border-radius: 15px;
    border-color: #ad9479;
    font-size: 0.9rem;
    width: 50%;
    padding-bottom: 15px;
}

.input-common,
input[type="date"],
input[type="number"],
select {
    width: auto;
    border: none;
    background: none;
    border-bottom-color: #ad9479;
    color: #6f5f4e;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding: 0 0 0 5px;
    text-align: center;
}
</style>
