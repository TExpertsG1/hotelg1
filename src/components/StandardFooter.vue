<template>
  <footer>
    <div>
      <div class="continf">
        <div class="div-contatos" id="contato">
          <form
            @submit="checkForm"
            novalidate="true"
            id="reserva"
            method="post"
            enctype="multipart/form-data"
          >
            <fieldset class="fieldsetFooter" id="contato">
              <legend>Envie sua Mensagem</legend>
              <label for="nome">
                <input
                  class="contatos"
                  type="text"
                  id="inputNome"
                  v-model="inputNome"
                  name="nome"
                  placeholder="Nome"
                /><br />
              </label>
              <label for="email">
                <input
                  class="contatos"
                  type="email"
                  id="inputEmail"
                  v-model="inputEmail"
                  name="email"
                  placeholder="Email"
                /><br />
              </label>
              <label for="assunto">
                <select v-model="selected" class="contatos" id="assunto">
                  <option disabled value="">Assunto</option>
                  <option
                    v-for="option in option"
                    v-bind:value="option.value"
                    :key="option"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </label>

              <br />
              <textarea
                class="contatos"
                type="message"
                id="txtMensagem"
                v-model="txtMensagem"
                rows="5"
                name="Mensagem"
                placeholder="Mensagem"
              /><br />
              <input
                type="submit"
                @click="adComentario"
                id="button"
                value="Enviar"
              />
              <!-- <div v-for="coment in getComentarios" :key="coment in Comentarios">
                <span></span>
              </div>     -->
              <p v-if="errors.length">
                <b>
                  <span v-for="error in errors" :key="error">{{ error }}</span>
                </b>
              </p>
            </fieldset>
          </form>
        </div>

        <div class="informacoes">
          <h2 id="contato" class="footerContato">Contato</h2>
          <p class="footerContato">
            <i class="fa-solid fa-location-dot"></i>{{ endereco }}
          </p>
          <p class="footerContato">
            <i class="fa-solid fa-phone-volume"></i>{{ telefone }}
          </p>
          <p class="footerContato">
            <i class="fa-brands fa-square-whatsapp"></i> {{ whatsapp }}
          </p>
          <p class="footerContato">
            <a href=""> <i class="fa-solid fa-envelope"></i>{{ email }}</a>
          </p>
        </div>
        <div class="redes-sociais">
          <h2>Siga-nos</h2>
          <a href="http://www.facebook.com.br"
            ><i class="fa-brands fa-square-facebook">{{ facebook }}</i></a
          >
          <a href="http://www.instagram.com">
            <i class="fa-brands fa-square-instagram"></i
          ></a>
          <a href="http://www.twitter.com"
            ><i class="fa-brands fa-square-twitter"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright principal">
    <h5>&copy;2077 - Todos os direitos reservados</h5>
  </div>
</template>

<script>
export default {
  name: "StandardFooter",
  data() {
    return {
      inputNome: null,
      inputEmail: null,
      txtMensagem: null,
      seleted: "",
      option: [
        { text: "...", value: "..." },
        { text: "Elogio", value: "Elogio" },
        { text: "Reclamação", value: "Reclamação" },
        { text: "Reservas", value: "Reservas" },
      ],

      endereco: "Rua T.expert, 250 CEP 09.520-650",
      telefone: "Telefone: (55) 11 9999-9999",
      whatsapp: "Whatsapp: (55) 11 8888-8888",
      email: "hotel1800@hotel1800.com.br",
      errors: [],
      // facebook: `${<i class="fa-brands fa-facebook>`,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.inputNome) {
        this.errors.push("O nome é obrigatório.");
      }
      if (!this.inputEmail) {
        this.errors.push("O e-mail é obrigatório.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Utilize um e-mail válido.");
      } else if (!this.errors.length) {
        return e.preventDefault()(
          this.errors.push(`${this.inputNome}, seu email foi enviado`)
        );
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
