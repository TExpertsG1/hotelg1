<template>
    <footer>
        <div class="principal">
            <div class="continf">
                <div class="div-contatos">
                    <form
                        id="reserva"
                        action
                        method="post"
                        enctype="multipart/form-data"
                    >
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
                                <select
                                    name="assunto"
                                    id="assunto"
                                    class="contatos"
                                >
                                    <option value="Assunto">Assunto</option>
                                    <option value="Elogio">Elogio</option>
                                    <option value="Reclamação">
                                        Reclamação
                                    </option>
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
                        <i class="fa-solid fa-location-dot"></i> Rua T.expert,
                        250 CEP 00.000-00
                    </p>
                    <p class="footerContato">
                        <i class="fa-solid fa-phone-volume"></i> (00) 0
                        0000-0000
                    </p>
                    <p class="footerContato">
                        <i class="fa-brands fa-square-whatsapp"></i> (00) 0
                        0000-0000
                    </p>
                    <p class="footerContato">
                        <i class="fa-solid fa-envelope"></i>
                        hotel1800@hotel1800.com.br
                    </p>
                    <div></div>
                </div>
                <div class="redes-sociais">
                    <h2>Siga-nos</h2>
                    <a href="http://www.facebook.com.br"
                        ><i class="fa-brands fa-facebook"></i
                    ></a>
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
};
</script>
<style scoped>
/*--- FOOTER ---*/
/* -- CONTINF -- */
.fieldsetFooter {
    min-width: none;
    border-radius: 15px;
    border-color: #ede5e3;
    font-size: 16px;
    width: 80%;
    font-weight: bold;
}

div.continf1 {
    display: flex;
    text-align: center;
    background-color: #ede5e3;
    font-size: 1.5rem;
}

div.continf {
    display: grid;
    grid-template-columns: 50% 25% 25%;
    text-align: center;
    background-color: #ede5e3;
    font-size: 1.5rem;
}

/*-- CONTATO --*/
.div-contatos {
    padding: 1rem;
    text-align: center;
}

.contatos {
    width: 60%;
    background: none;
    border: none;
    border-width: 2px;
    border-bottom-width: 1px;
    border-bottom-color: #82694e;
    border-bottom-style: solid;
    font-size: 1rem;
}

#message {
    padding-bottom: 6rem;
}

#button {
    font-size: 1.2rem;
    border: none;
    background-color: #82694e;
    color: #ffffff;
    padding: 8px 24px;
    margin: 10px;
    cursor: pointer;
    -webkit-border-radius: 10px;
}

/*-- INFORMAÇÕES --*/
div.informacoes {
    color: #82694e;
    text-align: left;
    font-size: 80%;
}

select {
    color: #666462;
}

div.redes-sociais {
    font-size: 2rem;
}

/* -- DIV MNR -- */
div.div-mnr {
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
}

/* -- COPYRIGHT -- */
div.copyright {
    text-align: center;
    color: #82694e;
}
</style>
