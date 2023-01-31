<template>
    <StandardHeader />
    <NossaHistoria />
    <StandardFooter />
</template>

<script>
import StandardHeader from '../../components/StandardHeader.vue'
import NossaHistoria from '../../components/NossaHistoria.vue'
import StandardFooter from '../../components/StandardFooter.vue'

export default {
    name:'SobrePage',
    components: {
        StandardHeader,
        NossaHistoria,
        StandardFooter,
    }
}
</script>