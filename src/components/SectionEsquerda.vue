<template>
    <section class="secao-esquerda">
            <div>
                <img class="imagem-secao" :src="imageSectionL" :alt="altImageSectionL">
            </div>
            <div class="texto">
                <h2>{{ tituloSectionL }}</h2>
                <p>{{ textoSectionL }}</p>
                <p>{{ textoSectionL2 }}</p>
            </div>
        </section>
</template>

<script>
export default {
    name:'SectionEsquerda',
    props: [
        "tituloSectionL",
        "imageSectionL",
        "altImageSectionL",
        "textoSectionL",
        "textoSectionL2"
    ]
}
</script>

<style>
.secao-esquerda{
    display: flex;
    align-items: initial;
    justify-content: space-around;
    margin: 4rem 0;
    background-color: #ede5e3;
}

.texto{
    max-width: 480px;
}

.secao-esquerda p{
    text-align: justify;
    padding-top: 1rem;
}

.imagem-secao{
    max-width: 480px;
    max-height: 602px;

    border-radius: 15px;
    opacity: 1;
}

.imagem-secao:hover{
    transition: 400ms;
	opacity: 0.8;
}
</style>