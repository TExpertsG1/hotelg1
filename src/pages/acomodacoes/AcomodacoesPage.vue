<template>
<div class="principal">
      <header>
        <section>
          <div>
            <div class="userBar">
              <a id="login">Login</a>
              <a id="logout">Sair</a>
            </div>
          </div>

          <span class="mainHeader">
            <!-- <a href="../index.html"> <img height="100%" src="../images/logo_1800.png" /></a> -->
            <nav class="navbar menu">
              <a href="../index.html">Início</a>
              <a href="./sobre.html">Nosso Hotel</a>
              <a href="./acomodacoes.html">Acomodações</a>
              <a href="./reservas.html">Reservas</a>
              <a href="#contato">Contato</a>
            </nav>
          </span>
          <div class="nomeLogo">
            <h1>Hotel 1800</h1>
          </div>
        </section>
      </header>
    </div>
    <main>
      <section class="principal">
        <div class="galeria">
          <div id="acomodacoes">
            <h2>Nossas Acomodações</h2>
            <div class="gallery">
              <!-- <a href="#familia"> <img src="../images/acomodacao1.jpg" alt="Suíte Familia" /></a> -->
              <br />
              <div class="desc">Suite Família</div>
            </div>
            <div class="gallery">
              <!-- <a href="#master"><img src="../images/acomodacao2.jpg" alt="Suíte Master" /></a> -->
              <div class="desc">Suíte Master</div>
            </div>
            <div class="gallery">
              <!-- <a href="#premium"> <img src="../images/acomodacao3.jpg" alt="Suíte Premium" /></a> -->
              <div class="desc">Suíte Premium</div>
            </div>
          </div>
        </div>
      </section>

      <SuiteContainer v-for="(suite, i) in suites" :key="i" :nomeSuite='suite.nomeSuite' :descricaoSuite='suite.descricaoSuite' :caracteristicasSuite="suite.caracteristicasSuite" :galeriaSuite="suite.galeriaSuite"/>

    </main>
    <footer>
      <div class="principal">
        <div class="continf">
          <div class="div-contatos">
            <form id="reserva" action method="post" enctype="multipart/form-data">
              <fieldset class="fieldsetFooter">
                <legend>Envie sua Mensagem</legend>
                <label for="name"></label>
                <input
                  class="contatos"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                /><br />
                <label for="email"></label>
                <input
                  class="contatos"
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Email"
                /><br />
                <label for="assunto">
                  <select name="assunto" id="assunto" class="contatos">
                    <option value="Assunto">Assunto</option>
                    <option value="Elogio">Elogio</option>
                    <option value="Reclamação">Reclamação</option>
                    <option value="Reservas">Reservas</option>
                  </select>
                </label>
                <br />
                <input
                  class="contatos"
                  type="message"
                  id="message"
                  name="Mensagem"
                  placeholder="Mensagem"
                /><br />
                <input type="button" id="button" value="Enviar" />
              </fieldset>
            </form>
          </div>

          <div class="informacoes">
            <h2 id="contato" class="footerContato">Contato</h2>
            <p class="footerContato">
              <i class="fa-solid fa-location-dot"></i> Rua T.expert, 250 CEP 00.000-00
            </p>
            <p class="footerContato"><i class="fa-solid fa-phone-volume"></i> (00) 0 0000-0000</p>
            <p class="footerContato">
              <i class="fa-brands fa-square-whatsapp"></i> (00) 0 0000-0000
            </p>
            <p class="footerContato"><i class="fa-solid fa-envelope"></i> hotel1800@hotel1800.com.br</p>
            <div></div>
          </div>
          <div class="redes-sociais">
            <h2>Siga-nos</h2>
            <a href="http://www.facebook.com.br"><i class="fa-brands fa-facebook"></i></a>
            <a href="http://www.instagram.com"> <i class="fa-brands fa-square-instagram"></i></a>
            <a href="http://www.twitter.com"><i class="fa-brands fa-square-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright principal">
      <h5>&copy;2077 - Todos os direitos reservados</h5>
    </div>
</template>

<script>
import SuiteContainer from '../../components/SuiteContainer.vue'

const suites = [
  {
    id: 1,
    nomeSuite: 'Suíte Família',
    descricaoSuite: 'Fiel ao estilo dos edifícios tradicionais sevilhanos, todos os nossos quartos Premium são diferentes e únicos. Preservamos várias partes do edifício original – varandas, persianas, tectos em caixotões e muito mais – para proporcionar aos nossos hóspedes uma sensação única.',
    caracteristicasSuite: ['Televisão de ecrã plano', 'Ar Condicionado', 'Lençol 100% algodão egípcio', 'Internet Gratuita', 'Mini Bar', 'Café da Manhã na Cama'],
    galeriaSuite: ['card1','card2','card3','card4','card5','card6']
  },
  {
    id: 2,
    nomeSuite: 'Suíte Master',
    descricaoSuite: 'Fiel ao estilo dos edifícios tradicionais sevilhanos, todos os nossos quartos Premium são diferentes e únicos. Preservamos várias partes do edifício original – varandas, persianas, tectos em caixotões e muito mais – para proporcionar aos nossos hóspedes uma sensação única.',
    caracteristicasSuite: ['Televisão de ecrã plano', 'Ar Condicionado', 'Lençol 100% algodão egípcio', 'Internet Gratuita', 'Mini Bar', 'Café da Manhã na Cama'],
    galeriaSuite: ['card7','card8','card9','card10','card11','card12']
  },
  {
    id: 3,
    nomeSuite: 'Suíte Premium',
    descricaoSuite: 'Fiel ao estilo dos edifícios tradicionais sevilhanos, todos os nossos quartos Premium são diferentes e únicos. Preservamos várias partes do edifício original – varandas, persianas, tectos em caixotões e muito mais – para proporcionar aos nossos hóspedes uma sensação única.',
    caracteristicasSuite: ['Televisão de ecrã plano', 'Ar Condicionado', 'Lençol 100% algodão egípcio', 'Internet Gratuita', 'Mini Bar', 'Café da Manhã na Cama'],
    galeriaSuite: ['card13','card14','card15','card16','card17','card18']
  },
]

export default {
  name: 'AcomodacoesPage',
  data() {
    return {
      suites
    }
  },
  components: {
    SuiteContainer
  }
}
</script>