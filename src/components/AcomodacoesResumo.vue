<template>
  <section class="principal">
    <div class="galeria">
      <div id="acomodacoes">
        <h2>Nossas Acomodações</h2>
        <div class="gallery" v-for="(suite, i) in todasSuites" :key="i">
          <a :href="`#${suite.href}`">
            <img
              :src="require(`../../public/images/acomodacao${suite.id}.jpg`)"
              :alt="suite.nomeSuite"
            />
          </a>
          <br />
          <div class="desc">{{ suite.nomeSuite }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AcomodacoesResumo",
  props: {
    todasSuites: Array,
  },
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
