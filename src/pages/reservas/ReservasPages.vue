<template>
    <div>
        <StandardHeader />
        <FacaSuaReserva />
        <div class="produtos">
            <div><ProdutosReserva /></div>
            <div class="resumoReserva"><ResumoReserva /></div>
        </div>
        <StandardFooter />
    </div>
</template>

<script>
import StandardHeader from "../../components/StandardHeader.vue";
import FacaSuaReserva from "../../components/FacaSuaReserva.vue";
import ProdutosReserva from "../../components/ProdutosReserva.vue";
import ResumoReserva from "../../components/ResumoReserva.vue";
import StandardFooter from "../../components/StandardFooter.vue";

export default {
    name: "ReservasPage",
    data() {},
    components: {
        StandardHeader,
        FacaSuaReserva,
        ProdutosReserva,
        ResumoReserva,
        StandardFooter,
    },
};
</script>

<style>
@charset "UTF-8";
* {
    font-family: "Baskerville";
    box-sizing: border-box;
    line-height: 1.5rem;
}

/*.......MIDIA QUERIES.......*/
@font-face {
    font-family: Baskerville;
    src: url(../../../public/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf);
}
html {
    scroll-behavior: smooth;
}

body {
    color: #82694e;
    background-color: #fff3f1;
    font-family: "Baskerville";
}

a {
    all: unset;
    cursor: pointer;
    transition: background-color 0.6s ease;
}

.menu a {
    color: #fff3f1;
}

h1 {
    font-size: 3rem;
    font-style: bold;
    padding: 0vh 0vh 0vh 24vh;
    color: #e9cb6b;
}

h2 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 5rem;
    text-align: center;
    font-family: "Baskerville";
}

.principal {
    margin: 1px 30px;
}

.nomeLogo {
    display: flex;
    padding-left: 0;
}

.produtos {
    display: grid;
    margin: 0 0 0 8%;
    grid-template-columns: 70% 22%;
}

.Algo {
    border: 1px black solid;
    height: 100rem;
}
</style>
