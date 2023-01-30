<template>
    <button class="button">{{ buttonText }}</button>
</template>
<script>
export default {
    name: "Button_1",
    data() {
        return {
            buttonText: "Confirmar",
        };
    },
};
</script>
<style scoped>
.button {
    border: none;
    font-size: 1.1rem;
    padding: 0.4rem 1rem;
    border-radius: 1rem;
    margin: -10px 0 20px 0;
    background-color: #fff3f1;
    color: #3f362d;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    color: #fff3f1;
    background-color: #82694e;
}
</style>
