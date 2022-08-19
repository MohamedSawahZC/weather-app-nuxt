<template>
  <main>
    <nuxt-link class="tag" to="/weather-app"><h1>Weather App</h1> </nuxt-link>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style lang="scss" scoped>
main {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    &:hover {
      color: crimson;
    }
  }
  .tag {
    display: flex;
    flex-direction: row;
  }
}
</style>
