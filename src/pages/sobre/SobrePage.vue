<template>
    <StandardHeader />
    <NossaHistoria />
    <SectionEsquerda />
    <SectionDireita />
    <SectionEsquerda />
    <SectionDireita />
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
    components: {
        StandardHeader,
        NossaHistoria,
        SectionDireita,
        SectionEsquerda,
        StandardFooter
    }
}
</script>