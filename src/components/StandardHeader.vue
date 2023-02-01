<template>
  <header>
    <section>
      <div>
        <div class="userBar">
          <a id="login">Login</a>
          <a id="logout">Sair</a>
        </div>
        <span class="mainHeader">
          <a href="./index.html">
            <img src="../../public/images/logo_1800.png" alt="" />
          </a>

          <nav class="navbar menu">
            <router-link to="/">Inicio</router-link>
            <router-link to="/">Nosso Hotel</router-link>
            <router-link to="/acomodacoes">Acomodações</router-link>
            <router-link to="/reservas">Reservas</router-link>
            <router-link to="/contato">Contato</router-link>
          </nav>
          <router-view />
          <!-- <nav class="navbar menu">
            <router-link to="/">Home</router-link> |
            <router-link to="/acomodacoes">Acomodações</router-link> |
            <router-link to="/reservas">Reservas</router-link>
          </nav>

          <ul class="navbar menu">
            <li v-for="(item, n) in menu" :key="n">
              <a href="../pages/reservas">{{ item }}</a>
            </li>
          </ul> -->

          <!-- <nav class="navbar menu">
                        <a href="./index.html">Início</a>
                        <a href="./pages/sobre.html">Nosso Hotel</a>
                        <a href="./pages/acomodacoes.html">Acomodações</a>
                        <a href="./pages/reservas.html">Reservas</a>
                        <a href="#contato">Contato</a>
                    </nav> -->
        </span>
        <div class="nomeLogo">
          <h1>Hotel 1800</h1>
        </div>
      </div>
    </section>
  </header>
</template>

<!-- <script>
export default {
  name: "StandardHeader",
  data() {
    return {
      menu: ["Inicio", "Nosso Hotel", "Acomodações", "Reserva", "Contato"],
    };
  },
};
</script> -->
