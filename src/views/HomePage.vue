<template>
  <div>
    <h1>Mau Jalan !!! </h1>
    <h2>Periksa Dulu Cuaca Hari Ini...</h2>  
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from '../components/WeatherWidget.vue'

export default {
  name: 'HomePage',
  components: {
    WeatherWidget
  }
}
</script>
