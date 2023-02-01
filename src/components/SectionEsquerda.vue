<template>
  <section class="secao-esquerda">
    <div>
      <img
        class="imagem-secao"
        src="../../public/images/Romantica.jpg"
        alt="Imagem de flores"
      />
    </div>
    <div class="texto">
      <h2>Experiência Romântica</h2>
      <p>
        Se você está pensando em comemorar sua lua de mel, aniversário ou noite
        de núpcias, queremos fazer parte da celebração. Você vai precisar de
        flores, champanhe, chocolates e muito amor, e na Casa 1800 temos de
        tudo, deixe-nos ajudá-lo.
      </p>
      <p>
        Dispomos de 33 quartos decorados com bom gosto e elegância, onde poderá
        relaxar nos seus lençóis de algodão egípcio e deliciar-se com o seu
        aroma a flores frescas, pátios centrais da Andaluzia iluminados com os
        mais belos lustres, um terraço com vistas deslumbrantes onde poderá
        tirar muitas fotografias daquele momento especial.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionEsquerda",
};
</script>

<style>
.secao-esquerda {
  display: flex;
  align-items: initial;
  justify-content: space-around;
  margin: 4rem 0;
  background-color: #ede5e3;
}
.texto {
  max-width: 480px;
}
.secao-esquerda p {
  text-align: justify;
  padding-top: 1rem;
}
.imagem-secao {
  max-width: 480px;
  max-height: 602px;
  border-radius: 15px;
  opacity: 1;
}
.imagem-secao:hover {
  transition: 400ms;
  opacity: 0.8;
}
</style>
