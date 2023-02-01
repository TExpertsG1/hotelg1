<template>
    <section class="texto-apresentacao">
        <div>
            <p class="nossa-historia">Nossa História</p>
        </div>
        <div>
            <p>O Hotel 1800 é uma mansão-palácio localizada no centro histórico de Sevilha. A
                história das mansões-palácios de Sevilha remonta ao início do século XIX, a Idade de
                Ouro de Sevilha, com grandes românticos, os heróis da lenda, Don Juan Tenorio,
                Carmen la Cigarrera, Lord Byron, Bécquer…</p>
            <p>Esta casa foi construída em 1864 seguindo um layout tradicional. Suas portas de
                madeira maciça cravejadas permitem a entrada no palácio com uma carruagem puxada por
                cavalos, da qual, quando a pé, pode-se acessar um pátio central de todos os quartos.</p>
        </div>
    </section>
</template>

<script>
export default {
    name:'NossaHistoria'
}
</script>

<style>
.texto-apresentacao{
    margin: 2rem 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nossa-historia{
    text-align: justify;
    font-size: 24px;
    font-weight: bold;
}

.texto-apresentacao p{
    text-align: justify;
    margin-top: 2rem;
}
</style>