import { createStore } from "vuex";

export default createStore({
    state: {
        checkIn: "",
        checkOut: "",
        diaria: "",
        qtdAdulto: "",
        qtdCrianca: "",
    },
    getters: {},
    mutations: {
        setCheckIn(state, checkIn) {
            state.checkIn = checkIn;
        },
        setCheckOut(state, checkOut) {
            state.checkOut = checkOut;
        },
        setQtdAdulto(state, qtdAdulto) {
            state.qtdAdulto = qtdAdulto;
        },
        setQtdCrianca(state, qtdCrianca) {
            state.qtdCrianca = qtdCrianca;
        },
    },
    actions: {},
    modules: {},
});
