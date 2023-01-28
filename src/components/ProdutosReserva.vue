<template>
    <div class="postArea" v-for="suite in suites" :key="suite.id">
        <img :src="suite.images" :alt="suite.name" />
        <div class="infoQuarto">
            <h2>{{ suite.name }}</h2>
            <p class="descQuartoTxt">{{ suite.description }}</p>
            <h3>R$ {{ suite.price.toFixed(2) }}</h3>
            <label>
                <p class="qntQuartoTxt">Quantidade de quartos</p>
                <select
                    :id="'select' + suite.id"
                    :name="'select' + suite.id"
                    class="selectSuite"
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProdutosReservas",
    data() {
        return {
            suites: [
                {
                    id: 1,
                    name: "Suíte Família",
                    description:
                        "Nossas suítes possuem conforto e luxo, com itens como televisão, ar condicionado, lençóis 100% algodão egípcio, internet gratuita, mini bar e café da manhã na cama. Desfrute de todos esses itens e muito mais em sua estadia conosco.",
                    price: 150,
                    images: "/images/acomodacao1.jpg",
                },
                {
                    id: 2,
                    name: "Suíte Master",
                    description:
                        "Os quartos do hotel oferecem uma variedade de comodidades, incluindo uma banheira com chuveiro, uma máquina de café com cápsulas, uma sala de estar, flores naturais, internet gratuita, roupão de banho e muito mais. Cada detalhe foi cuidadosamente planejado para garantir o conforto e o bem-estar dos hóspedes.",
                    price: 250,
                    images: "/images/acomodacao2.jpg",
                },
                {
                    id: 3,
                    name: "Suite Premium",
                    description:
                        "O Terraço com Jacuzzi é o destaque do hotel, oferecendo uma vista deslumbrante e um ambiente relaxante para os hóspedes. Além disso, o pátio conta com cadeiras e mesas para desfrutar do ar livre. As suítes possuem banheira e ar condicionado para maior conforto, além de lençóis 100% algodão egípcio. Estes detalhes tornam a estadia ainda mais agradável e luxuosa.",
                    price: 350,
                    images: "/images/acomodacao3.jpg",
                },
            ],
        };
    },
};
</script>
<style scoped>
.postArea {
    border: 1px solid #ad9479;
    display: flex;
    margin: 1rem 0 1rem 0;
    border-radius: 15px;
}

.postArea img {
    max-width: 40%;
    border-radius: 15px;
    margin: 10px;
}

.infoQuarto {
    margin: 0;
}

.descQuartoTxt {
    margin: 0 10px 0 0;
    text-align: justify;
}

.qntQuartoTxt {
    display: inline-block;
    margin: 0 10px 10px 0px;
}

.selectSuite {
    border: none;
    background: none;
    border-bottom-color: #ad9479;
    color: #6f5f4e;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
</style>
