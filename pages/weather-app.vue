<template>
  <v-container>
    <!-- <v-layout> -->
    <v-flex class="flex" x512>
      <v-card class="card" color="blue-grey darken-2" dark>
        <div v-if="$store.state.weather">
          <v-card-title>Temperature</v-card-title>
          <v-card-text class="cityName">{{
            $store.state.weather.name
          }}</v-card-text>
          <img
            :src="`https://openweathermap.org/img/w/${$store.state.weather.weather[0].icon}.png`"
            alt="icon"
          />
        </div>
        <div v-else><p>Data Loading...</p></div>
      </v-card>
    </v-flex>
    <v-flex class="flex" x512>
      <v-form @submit.prevent="getWeatherInfo">
        <v-text-field
          v-model="city"
          solo
          class="text-field"
          label="Enter the city name"
        >
        </v-text-field>
      </v-form>
    </v-flex>
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      city: "London",
    };
  },
  created() {
    this.getWeatherInfo();
  },
  methods: {
    getWeatherInfo() {
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=b9badec1962da77137bab133ea201384`
        )
        .then((res) => {
          this.$store.commit("setWeather", res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  margin-top: 1rem;
}
.card {
  display: flex;
  justify-content: center;
  align-content: center;
}
h1 {
  color: white;
}
.cityName {
  font-size: 1.5rem;
  color: crimson !important;
}
</style>
