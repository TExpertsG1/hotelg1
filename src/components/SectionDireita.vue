<template>
    <section class="secao-direita">
        <div class="texto">
            <h2>{{ tituloSectionD }}</h2>
            <p>{{ textoSectionD }}</p>
        </div>
        <div><img class="imagem-secao" :src="imageSectionD" :alt="altImageSectionD"/></div>
    </section>
</template>

<script>
export default {
    name:'SectionDireita',
    props:[
        "tituloSectionD",
        "imageSectionD",
        "altImageSectionD",
        "textoSectionD",
    ]
}
</script>

<style>
.secao-direita{
    align-items: initial;
    display: flex;
    justify-content: space-around;
    margin: 4rem 0;
}

.secao-direita p {
    text-align: justify;
    margin-top: 1rem;
}
</style>