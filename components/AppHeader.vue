<template>
  <main class="app-bar" :clipped-left="clipped" fixed app>
    <h1 class="title">Weather App</h1>
  </main>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      clipped: false,

      fixed: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;600;700&family=Lobster&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
main {
  display: flex;
  align-items: center;
  height: 8vh;
  padding: 1rem 2rem;
  background-color: indigo !important;
  h1 {
    color: white;
    font-family: "DynaPuff", cursive !important;
  }
}
</style>
