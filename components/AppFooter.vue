<template>
  <v-footer class="footer" :absolute="!fixed" app>
    <span>Copyrights &copy; {{ new Date().getFullYear() }} Mohamed Sawah</span>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      fixed: false,
    };
  },
};
</script>

<style scoped>
</style>
