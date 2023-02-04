<template>
  <div class="home"></div>
  <StandardHeader />
  <StandardIndex />

  <StandardFooter />
</template>

<script>
// @ is an alias to /src
import StandardIndex from "@/components/StandardIndex.vue";
import StandardFooter from "@/components/StandardFooter.vue";
import StandardHeader from "@/components/StandardHeader.vue";

export default {
  name: "HomeView",
  components: {
    StandardIndex,
    StandardFooter,
    StandardHeader,
  },
};
</script>
