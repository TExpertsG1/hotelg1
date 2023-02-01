<template>
    <StandardHeader />
    <NossaHistoria />
    <SectionEsquerda
    :tituloSectionL="tituloSection1"
    :imageSectionL="imageSection1"
    :altImageSectionL="altImageSection1"
    :textoSectionL="textoSection1"
    :textoSectionL2="textoSection12" 
    />
    <SectionDireita 
    :tituloSectionD="tituloSection2"
    :imageSectionD="imageSection2"
    :altImageSectionD="altImageSection2"
    :textoSectionD="textoSection2"
     />
    <SectionEsquerda
    :tituloSectionL="tituloSection3"
    :imageSectionL="imageSection3"
    :altImageSectionL="altImageSection3"
    :textoSectionL="textoSection3"
     />
    <SectionDireita
    :tituloSectionD="tituloSection4"
    :imageSectionD="imageSection4"
    :altImageSectionD="altImageSection4"
    :textoSectionD="textoSection4"
     />
    <StandardFooter />
</template>

<script>
import StandardHeader from '../../components/StandardHeader.vue';
import NossaHistoria from '../../components/NossaHistoria.vue';
import SectionEsquerda from '../../components/SectionEsquerda.vue';
import SectionDireita from '../../components/SectionDireita.vue';
import StandardFooter from '../../components/StandardFooter.vue';

export default {
    name:'SobrePage',
    data(){
        return {
            imageSection1:'/images/Romantica.jpg',
            altImageSection1:'Foto das Flores',
            tituloSection1:'Experiência Romântica',
            textoSection1:'Se você está pensando em comemorar sua lua de mel, aniversário ou noite de núpcias, queremos fazer parte da celebração. Você vai precisar de flores, champanhe, chocolates e muito amor, e na Casa 1800 temos de tudo, deixe-nos ajudá-lo.',
            textoSection12:'Dispomos de 33 quartos decorados com bom gosto e elegância, onde poderá relaxar nos seus lençóis de algodão egípcio e deliciar-se com o seu aroma a flores frescas, pátios centrais da Andaluzia iluminados com os mais belos lustres, um terraço com vistas deslumbrantes onde poderá tirar muitas fotografias daquele momento especial.',

            imageSection2:'../images/sevilla-a-los-pies-de-la-giralda-1.jpg',
            altImageSection2:'Imagem de área de lazer do Hotel',
            tituloSection2:'Bem Estar',
            textoSection2:'Nossa piscina, localizada no terraço, oferece vistas panorâmicas de uma área rica em história, incluindo vistas do Real Alcázar, do Hospital de los Venerables, da Catedral e da Giralda. Um lugar aconchegante para relaxar com vistas de tirar o fôlego que você não pode perder Faça uma pausa em um de nossos solários e desfrute de um chá, café ou uma bebida em paz.',

            imageSection3:'./images/close-up-of-man-playing-guitar-1.jpg',
            altImageSection3:'Imagem de homem tocando violão',
            tituloSection3:'Cultura',
            textoSection3:'O Hotel 1800 é um antigo palacete que já tem muita história, enclausurado no bairro mais histórico da cidade. A poucos passos do hospital Los Venerables, e tão perto de La Catedral e La Giralda que, de fato, você pode vê-los de nossa casa. A localização é essencial para nós, porque a partir de nossa casa e apenas caminhando você encontrará uma rica oferta cultural. Não apenas os monumentos mencionados estão próximos, como também estamos a uma curta caminhada da famosa Plaza de España e do Parque Maria Luisa, e se formos para o outro lado, você encontrará o famoso Metropol Parasol, também conhecido como Cogumelos de Sevilha, a Praça de Touros Maestranza ou a Torre del Oro.',

            imageSection4:'../images/jamón-de-bellota-100-formato-plato-1-1.jpg',
            altImageSection4:'Imagem de prato com comida',
            tituloSection4:'Gastronomia',
            textoSection4:'No Hotel Casa 1800 Sevilla também queremos que você tenha uma experiência gastronômica inesquecível. Servimos um requintado pequeno-almoço onde poderá saborear os melhores queijos curados, fruta da época, sumos naturais ou o delicioso presunto ibérico de bolota. Se você tiver alguma necessidade alimentar, não hesite em nos informar e garantiremos que você possa desfrutar de um maravilhoso café da manhã.',
        }
    },
    components: {
        StandardHeader,
        NossaHistoria,
        SectionDireita,
        SectionEsquerda,
        StandardFooter
    }
}
</script>
