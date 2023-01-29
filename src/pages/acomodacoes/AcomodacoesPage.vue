<template>
    <div class="principal">
        <StandardHeader />
    </div>
    <main>
        <section class="principal">
            <div class="galeria">
                <div id="acomodacoes">
                    <h2>Nossas Acomodações</h2>
                    <div class="gallery">
                        <!-- <a href="#familia"> <img src="../images/acomodacao1.jpg" alt="Suíte Familia" /></a> -->
                        <br />
                        <div class="desc">Suite Família</div>
                    </div>
                    <div class="gallery">
                        <!-- <a href="#master"><img src="../images/acomodacao2.jpg" alt="Suíte Master" /></a> -->
                        <div class="desc">Suíte Master</div>
                    </div>
                    <div class="gallery">
                        <!-- <a href="#premium"> <img src="../images/acomodacao3.jpg" alt="Suíte Premium" /></a> -->
                        <div class="desc">Suíte Premium</div>
                    </div>
                </div>
            </div>
        </section>

        <SuiteContainer
            v-for="(suite, i) in suites"
            :key="i"
            :nomeSuite="suite.nomeSuite"
            :descricaoSuite="suite.descricaoSuite"
            :caracteristicasSuite="suite.caracteristicasSuite"
            :galeriaSuite="suite.galeriaSuite"
        />
    </main>
    <StandardFooter />
</template>

<script>
import SuiteContainer from "../../components/SuiteContainer.vue";
import StandardHeader from "../../components/StandardHeader.vue";
import StandardFooter from "../../components/StandardFooter.vue";

const suites = [
    {
        id: 1,
        nomeSuite: "Suíte Família",
        descricaoSuite:
            "Fiel ao estilo dos edifícios tradicionais sevilhanos, todos os nossos quartos Premium são diferentes e únicos. Preservamos várias partes do edifício original – varandas, persianas, tectos em caixotões e muito mais – para proporcionar aos nossos hóspedes uma sensação única.",
        caracteristicasSuite: [
            "Televisão de ecrã plano",
            "Ar Condicionado",
            "Lençol 100% algodão egípcio",
            "Internet Gratuita",
            "Mini Bar",
            "Café da Manhã na Cama",
        ],
        galeriaSuite: ["card1", "card2", "card3", "card4", "card5", "card6"],
    },
    {
        id: 2,
        nomeSuite: "Suíte Master",
        descricaoSuite:
            "Fiel ao estilo dos edifícios tradicionais sevilhanos, todos os nossos quartos Premium são diferentes e únicos. Preservamos várias partes do edifício original – varandas, persianas, tectos em caixotões e muito mais – para proporcionar aos nossos hóspedes uma sensação única.",
        caracteristicasSuite: [
            "Televisão de ecrã plano",
            "Ar Condicionado",
            "Lençol 100% algodão egípcio",
            "Internet Gratuita",
            "Mini Bar",
            "Café da Manhã na Cama",
        ],
        galeriaSuite: ["card7", "card8", "card9", "card10", "card11", "card12"],
    },
    {
        id: 3,
        nomeSuite: "Suíte Premium",
        descricaoSuite:
            "Fiel ao estilo dos edifícios tradicionais sevilhanos, todos os nossos quartos Premium são diferentes e únicos. Preservamos várias partes do edifício original – varandas, persianas, tectos em caixotões e muito mais – para proporcionar aos nossos hóspedes uma sensação única.",
        caracteristicasSuite: [
            "Televisão de ecrã plano",
            "Ar Condicionado",
            "Lençol 100% algodão egípcio",
            "Internet Gratuita",
            "Mini Bar",
            "Café da Manhã na Cama",
        ],
        galeriaSuite: [
            "card13",
            "card14",
            "card15",
            "card16",
            "card17",
            "card18",
        ],
    },
];

export default {
    name: "AcomodacoesPage",
    data() {
        return {
            suites,
        };
    },
    components: {
        SuiteContainer,
        StandardHeader,
        StandardFooter,
    },
};
</script>
