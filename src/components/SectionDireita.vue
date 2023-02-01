<template>
  <section class="secao-direita">
    <div class="texto">
      <h2>Bem Estar</h2>
      <p>
        Nossa piscina, localizada no terraço, oferece vistas panorâmicas de uma
        área rica em história, incluindo vistas do Real Alcázar, do Hospital de
        los Venerables, da Catedral e da Giralda. Um lugar aconchegante para
        relaxar com vistas de tirar o fôlego que você não pode perder Faça uma
        pausa em um de nossos solários e desfrute de um chá, café ou uma bebida
        em paz.
      </p>
    </div>
    <div>
      <img
        class="imagem-secao"
        src="../../public/images/sevilla-a-los-pies-de-la-giralda-1.jpg"
        alt="Imagem da Cidade"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionDireita",
};
</script>

<style>
.secao-direita {
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
