import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./css/_style.css";
import "./css/footer.css";
import "./css/header.css";
import "./css/acomodacoes.css";

createApp(App).use(router).mount("#app");
