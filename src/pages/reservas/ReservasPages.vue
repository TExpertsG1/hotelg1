<template>
    <div>
        <StandardHeader />
        <FacaSuaReserva />
        <div class="produtos">
            <div><ProdutosReserva class="ab" /></div>
            <div class="resumoReserva"><ResumoReserva /></div>
        </div>
        <div class="Algo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            iusto, maxime eveniet laboriosam eos beatae molestias? Quidem
            distinctio earum ratione vel assumenda commodi veniam sequi
            aspernatur explicabo animi? Velit, corporis iste accusantium in
            tenetur, laudantium, maiores molestiae autem similique eligendi
            eaque deserunt? Numquam atque ex voluptatum, delectus beatae fuga
            corporis dolorem ad quasi quis odio. Vero deserunt dolorem qui dicta
            hic iste minima fugiat ad. Dolore, qui. Ipsa nobis impedit
            dignissimos maiores odio perferendis commodi veritatis repellat
            possimus expedita id, excepturi adipisci! Eos sint voluptas minus
            rem. Cumque facere nostrum quia rerum eveniet maiores labore iste
            velit magnam? Exercitationem, assumenda.
        </div>
    </div>
</template>

<script>
import StandardHeader from "../../components/StandardHeader.vue";
import FacaSuaReserva from "../../components/FacaSuaReserva.vue";
import ProdutosReserva from "../../components/ProdutosReserva.vue";
import ResumoReserva from "../../components/ResumoReserva.vue";

export default {
    name: "ReservasPage",
    data() {},
    components: {
        StandardHeader,
        FacaSuaReserva,
        ProdutosReserva,
        ResumoReserva,
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
    margin: 0 0 0 2.5rem;
    grid-template-columns: 75% 25%;
}

.Algo {
    border: 1px black solid;
    height: 100rem;
}
</style>
