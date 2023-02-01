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
  margin: 1rem 0;
  font-size: 1.2rem;
  border: none;
  background-color: #ad9479;
  color: #ffffff;
  padding: 0.6rem 2rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: background-color 0.3s ease;
}

.button:hover {
  font-weight: bold;
  background-color: #82694e;
}
</style>
