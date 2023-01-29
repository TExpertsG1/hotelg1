<template>
    <header>
        <section>
            <div>
                <div class="userBar">
                    <a id="login">Login</a>
                    <a id="logout">Sair</a>
                </div>
            </div>

            <span class="mainHeader">
                <a href="index.html">
                    <img height="100%" src="../../public/images/logo_1800.png"
                /></a>
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
</template>

<script>
export default {
    name: "StandardHeader",
};
</script>

<style scoped>
header {
    display: flex;
    background-color: #ede5e3;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-attachment: fixed;
    background-image: url("../../public/images/imagemHeader.jpg");
    background-attachment: fixed;
}

header section {
    width: 100%;
}

.userBar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 1rem;
    padding: 20px 40px 20px 20px;
    gap: 0.3rem;
    color: #fff3f1;
}

.userBar a {
    display: flex;
    min-width: 60px;
    padding: 0.5rem;
    justify-content: center;
    background-color: #ad9479;
    border-radius: 0.5rem;
}

.userBar a:hover {
    font-weight: bold;
    background-color: #82694e;
}

.mainHeader {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.mainHeader img {
    max-height: 8rem;
    max-width: 8rem;
}

.navbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.3rem;
}

.navbar a {
    padding: 0.5rem;
    background-color: #ad9479;
    border-radius: 0.5rem;
    font-size: 1rem;
}

.navbar a:hover {
    font-weight: bold;
    background-color: #82694e;
}
</style>
