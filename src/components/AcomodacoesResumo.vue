<template>
  <section class="principal">
    <div class="galeria">
      <div id="acomodacoes">
        <h2>Nossas Acomodações</h2>
        <div class="gallery">
          <a href="#familia">
            <img src="../../public/images/acomodacao1.jpg" alt="Suíte Familia"
          /></a>
          <br />
          <div class="desc">Suite Família</div>
        </div>
        <div class="gallery">
          <a href="#master"
            ><img src="../../public/images/acomodacao2.jpg" alt="Suíte Master"
          /></a>
          <div class="desc">Suíte Master</div>
        </div>
        <div class="gallery">
          <a href="#premium">
            <img src="../../public/images/acomodacao3.jpg" alt="Suíte Premium"
          /></a>
          <div class="desc">Suíte Premium</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AcomodacoesResumo",
};
</script>

<style scoped>
.galeria {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.gallery {
  float: left;
  padding: 15px;
}
.desc {
  padding: 20px;
  text-align: center;
  text-decoration: overline;
  font-weight: bold;
}
img {
  width: 200px;
  height: auto;
  border-radius: 15px;
}
</style>
