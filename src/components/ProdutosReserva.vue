<template>
    <div class="fullPost" v-for="suite in suites" :key="suite.id">
        <div class="postProduto">
            <img :src="suite.images" :alt="suite.name" />
            <div class="infoQuarto">
                <h2>{{ suite.name }}</h2>
                <p class="descQuartoTxt">{{ suite.description }}</p>
                <h3>R$ {{ suite.price.toFixed(2) }}</h3>
                <label>
                    <p class="qntQuartoTxt">Quantidade de quartos</p>
                    <select
                        @change="saveSuite(suite.select, suite.id)"
                        v-model="suite.select"
                        class="selectSuite"
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
                <br />
                <button
                    @click="
                        suite.exibirServicosAdicionais =
                            !suite.exibirServicosAdicionais
                    "
                >
                    Mais Serviços
                </button>
            </div>
        </div>
        <div class="servicosAdicionais" v-if="suite.exibirServicosAdicionais">
            <h2>Serviços adicionais</h2>
            <ul>
                <li
                    class="servicoTxt"
                    v-for="servico in servicosAdicionais"
                    :key="servico.id"
                >
                    <select
                        @change="
                            saveServicoAdicionais(servico.select, servico.id)
                        "
                        v-model="servico.select"
                        class="selectServicosAdicionais"
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    {{ servico.name }} - R$ {{ servico.price.toFixed(2) }}
                </li>
                <li
                    v-for="servicoCheckBox in servicosAdicionaisCheckBox"
                    :key="servicoCheckBox.id"
                >
                    <input
                        type="checkbox"
                        :id="'checkbox' + servicoCheckBox.id"
                        :name="'checkbox' + servicoCheckBox.id"
                        class="selectServicosAdicionais"
                    />
                    <a class="checkBoxName"
                        >{{ servicoCheckBox.name }} - R$
                        {{ servicoCheckBox.price.toFixed(2) }}</a
                    >
                </li>
                <h3>Total : {{ totalAdicionais }}</h3>
            </ul>
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
                    select: "select1",
                    name: "Suíte Família",
                    description:
                        "Nossas suítes possuem conforto e luxo, com itens como televisão, ar condicionado, lençóis 100% algodão egípcio, internet gratuita, mini bar e café da manhã na cama. Desfrute de todos esses itens e muito mais em sua estadia conosco.",
                    price: 150,
                    images: "/images/acomodacao1.jpg",
                    exibirServicosAdicionais: false,
                },
                {
                    id: 2,
                    select: "select2",
                    name: "Suíte Master",
                    description:
                        "Os quartos do hotel oferecem uma variedade de comodidades, incluindo uma banheira com chuveiro, uma máquina de café com cápsulas, uma sala de estar, flores naturais, internet gratuita, roupão de banho e muito mais. Cada detalhe foi cuidadosamente planejado para garantir o conforto e o bem-estar dos hóspedes.",
                    price: 250,
                    images: "/images/acomodacao2.jpg",
                    exibirServicosAdicionais: false,
                },
                {
                    id: 3,
                    select: "select3",
                    name: "Suite Premium",
                    description:
                        "O Terraço com Jacuzzi é o destaque do hotel, oferecendo uma vista deslumbrante e um ambiente relaxante para os hóspedes. Além disso, o pátio conta com cadeiras e mesas para desfrutar do ar livre. As suítes possuem banheira e ar condicionado para maior conforto, além de lençóis 100% algodão egípcio. Estes detalhes tornam a estadia ainda mais agradável e luxuosa.",
                    price: 350,
                    images: "/images/acomodacao3.jpg",
                    exibirServicosAdicionais: false,
                },
            ],
            servicosAdicionais: [
                {
                    id: 1,
                    select: "selectServico1",
                    name: "Café da manhã extra",
                    description: "Um café da manhã extra para acompanhante",
                    price: 25,
                },
                {
                    id: 2,
                    select: "selectServico2",
                    name: "Massagem relaxante",
                    description:
                        "Uma hora de massagem relaxante para renovar as energias",
                    price: 75,
                },
                {
                    id: 3,
                    select: "selectServico3",
                    name: "Jantar especial",
                    description:
                        "Um jantar especial preparado por nossa equipe de culinária",
                    price: 120,
                },
                {
                    id: 4,
                    select: "selectServico4",
                    name: "Academia",
                    description: "Acesso à academia do hotel",
                    price: 35,
                },
                {
                    id: 5,
                    select: "selectServico5",
                    name: "Serviço de lavanderia",
                    description: "Serviço de lavanderia para roupas pessoais",
                    price: 50,
                },
                {
                    id: 6,
                    select: "selectServico6",
                    name: "Aluguel de carros",
                    description: "Aluguel de carros disponível no hotel",
                    price: 120,
                },
                {
                    id: 7,
                    select: "selectServico7",
                    name: "Babá/serviço de creche",
                    description:
                        "Serviço de babá ou creche disponível no hotel",
                    price: 75,
                },
                {
                    id: 8,
                    select: "selectServico8",
                    name: "Bebidas ilimitadas no bar",
                    description:
                        "Bebidas ilimitadas disponíveis no bar do hotel",
                    price: 65,
                },
            ],
            servicosAdicionaisCheckBox: [
                {
                    id: 9,
                    name: "Room service",
                    description:
                        "Serviço de comida e bebida diretamente no quarto",
                    price: 65,
                },
                {
                    id: 10,
                    name: "Turismo na cidade",
                    description: "Serviço de turismo para explorar a cidade",
                    price: 150,
                },
            ],
            quantidadeSuite1: "",
            quantidadeSuite2: "",
            quantidadeSuite3: "",
            servicosAdicionaisSuite1: [],
            servicosAdicionaisSuite2: [],
            servicosAdicionaisSuite3: [],
        };
    },
    methods: {
        saveSuite(value, id) {
            switch (id) {
                case 1:
                    this.quantidadeSuite1 = value;
                    break;
                case 2:
                    this.quantidadeSuite2 = value;
                    break;
                case 3:
                    this.quantidadeSuite3 = value;
                    break;
                default:
                    break;
            }
        },
        saveServicoAdicionais(servico, id) {
            switch (id) {
                case 1:
                    this.servicosAdicionaisSuite1.push(servico);
                    localStorage.setItem(
                        "servicosAdicionaisSuite1",
                        this.servicosAdicionaisSuite1
                    );
                    break;
            }
        },
    },
    watch: {
        quantidadeSuite1(value) {
            localStorage.setItem("quantidadeSuite1", value);
        },
        quantidadeSuite2(value) {
            localStorage.setItem("quantidadeSuite2", value);
        },
        quantidadeSuite3(value) {
            localStorage.setItem("quantidadeSuite3", value);
        },
        servicosAdicionaisSuite1(value) {
            localStorage.setItem("servicosAdicionaisSuite1", value);
        },
    },
    created() {
        this.quantidadeSuite1 = localStorage.getItem("quantidadeSuite1");
        this.quantidadeSuite2 = localStorage.getItem("quantidadeSuite2");
        this.quantidadeSuite3 = localStorage.getItem("quantidadeSuite3");
        this.servicosAdicionaisSuite1 = localStorage.getItem(
            "servicosAdicionaisSuite1"
        );
    },
};
</script>
<style scoped>
/* * {
    border: 1px solid red;
} */

.fullPost {
    margin: 0 0 0 0;
}

p,
h2,
h3 {
    color: #3f362d;
}

.postProduto {
    display: flex;
    border: 1px solid #3f362d;
    border-bottom: 5px solid #6f5f4e;
    border-right: 5px solid #6f5f4e;
    border-radius: 15px;
    margin: 1rem 0 1rem 0;
}

.postProduto img {
    max-width: 40%;
    min-height: 40%;
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

select {
    border: none;
    background: none;
    border-bottom-color: #3f362d;
    color: #6f5f4e;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

.servicosAdicionais {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #3f362d;
    border-radius: 15px;
    border-bottom: 5px solid #6f5f4e;
    border-right: 5px solid #6f5f4e;
    width: auto;
    margin: 0 0 1rem 31%;
}

.servicosAdicionais h3 {
    text-align: center;
    margin: 1rem 45px 0 0;
    color: #3f362d;
}

.servicosAdicionais ul {
    margin: -10px 0 1rem 0;
    color: #3f362d;
}

.servicosAdicionais li {
    list-style: none;
    text-align: justify;
    margin: 0 45px 0 0;
    color: #3f362d;
}

.servicoTxt {
    line-height: 28px;
}

button {
    border: 0;
    margin: 0 0 1rem 0;
    color: #463c26;
    padding: 0;
    background: none;
    font-size: 1rem;
}

button:hover {
    color: #876c4b;
    cursor: pointer;
}

input[type="checkbox"] {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 1px solid #82694e;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 5px 0 0 9px;
}
input[type="checkbox"]:checked {
    background-color: #82694e;
}

.checkBoxName {
    margin: 12px;
}
</style>
