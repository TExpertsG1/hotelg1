<template>
  <section id="sobre">
    <div>
      <div class="container-grid">
        <div id="containersobre01">
          <img
            src="./../../public/images/hotel-casa-1800-sevilla.jpg"
            alt="Sobre o nosso hotel"
          />
        </div>
        <div id="containersobre02">
          <h2>Nossa história</h2>
          <p>
            O Hotel G1 é uma mansão-palácio localizada no centro histórico de
            Sevilha. A história das mansões-palácios de Sevilha remonta ao
            início do século XIX, a Idade de Ouro de Sevilha, com grandes
            românticos, os heróis da lenda, Don Juan Tenorio, Carmen la
            Cigarrera, Lord Byron, Bécquer…
          </p>
          <div>
            <a href="./pages/sobre.html#nossaHistoria">
              <button>Saiba mais</button></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="navPos">
    <ul>
      <li>
        <a href="pages/reservas.html"
          ><i class="fa-solid fa-calendar-days"></i>
        </a>
      </li>
      <li>
        <a href="pages/sobre.html"
          ><i class="fa-solid fa-bell-concierge"></i
        ></a>
      </li>
      <li>
        <a href="#contato"><i class="fa-solid fa-address-book"></i></a>
      </li>
    </ul>
  </div>
  <br />
  <section id="acomodacoes">
    <div class="galeria">
      <div id="acomodacoes">
        <h2>Nossas Acomodações</h2>
        <div class="gallery">
          <a href="./pages/acomodacoes.html#suiteFamilia">
            <img
              src="./../../public/images/acomodacao1.jpg"
              alt="Suíte Familia"
          /></a>
          <br />
          <div class="desc">Suite Família</div>
        </div>
        <div class="gallery">
          <a href="./pages/acomodacoes.html#suiteMaster">
            <img src="./../../public/images/acomodacao2.jpg" alt="Suíte Master"
          /></a>
          <div class="desc">Suíte Master</div>
        </div>
        <div class="gallery">
          <a href="./pages/acomodacoes.html#suitePremium"
            ><img
              src="./../../public/images/acomodacao3.jpg"
              alt="Suíte Premium"
          /></a>
          <div class="desc">Suíte Premium</div>
        </div>
      </div>
    </div>
  </section>
  <div>
    <div id="acomodacoesfundo"></div>
  </div>
  <section id="servicos">
    <div>
      <h2 class="h2Color">Conheça mais sobre nossos serviços</h2>
      <article id="servicos">
        <div class="container-servicos">
          <div class="container-servicos2">
            <div class="divIcon">
              <i class="fa-solid fa-heart fa-2x"></i>
              <h2 class="h1Color">Experiência Romântica</h2>
            </div>
            <p class="textos">
              Se você está pensando em comemorar sua lua de mel, aniversário ou
              noite de núpcias, queremos fazer parte da celebração. Você vai
              precisar de flores, champanhe, chocolates e muito amor, e na Casa
              1800 temos de tudo, deixe-nos ajudá-lo...
            </p>
            <a class="saibaMais" href="./pages/sobre.html#experienciaRomantica"
              >Saiba mais</a
            >
          </div>
          <div class="container-servicos2">
            <div class="divIcon">
              <i class="fa-solid fa-person-burst fa-2x"></i>
              <h2 class="h1Color">Bem Estar</h2>
            </div>
            <p class="textos">
              Em nossa casa também queremos que você relaxe, você merece um
              descanso. Nossa piscina, localizada no terraço, oferece vistas
              panorâmicas de uma área rica em história, incluindo vistas do Real
              Alcázar, do Hospital de los Venerables, da Catedral e da Giralda.
            </p>
            <a class="saibaMais" href="./pages/sobre.html#bemEstar"
              >Saiba mais</a
            >
          </div>
          <div class="container-servicos2">
            <div class="divIcon">
              <i class="fa fa-home fa-2x" aria-hidden="true"></i>
              <h2 class="h1Color">Cultura</h2>
            </div>
            <p class="textos">
              Vários dos museus que temos na cidade também são famosos e
              queremos ajudá-lo a esgueirar-se por eles, visite o museu de arte
              flamenca, o museu marítimo ou o típico e famoso museu das
              carruagens.
            </p>
            <a class="saibaMais" href="./pages/sobre.html#cultura"
              >Saiba mais</a
            >
          </div>
        </div>
      </article>
    </div>
  </section>
  <br />
  <section id="gastronomia">
    <div>
      <div class="container-grid-gastro">
        <div id="containergastro02">
          <h2 id="gastronomia">Gastronomia</h2>
          <p>
            No Hotel Casa 1800 Sevilla também queremos que você tenha uma
            experiência gastronômica inesquecível. Servimos um requintado
            pequeno-almoço onde poderá saborear os melhores queijos curados,
            fruta da época, sumos naturais ou o delicioso presunto ibérico de
            bolota. Se você tiver alguma necessidade alimentar, não hesite em
            nos informar e garantiremos que você possa desfrutar de um
            maravilhoso café da manhã...
          </p>
          <div>
            <a href="./pages/sobre.html#gastronomia">
              <button>Saiba mais</button></a
            >
          </div>
        </div>
        <div id="containergastro01">
          <img
            src="./../../public/images/Gastronomia1.jpeg"
            alt="Sobre o nosso hotel"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StandardIndex",
};
</script>
