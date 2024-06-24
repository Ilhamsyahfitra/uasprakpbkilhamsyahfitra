<template>
  <q-page class="flex flex-center">
    <q-layout view="lHh Lpr lFf">
      <!-- Header -->
      <q-header class="bg-primary text-white shadow-2">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn flat round dense icon="cloud" aria-label="Weather" />
            WEATHER
          </q-toolbar-title>
          <q-btn flat label="Muhammad Ilham Syahfitra" />
        </q-toolbar>
      </q-header>

      <!-- Page Container -->
      <q-page-container>
        <q-page padding class="flex flex-center q-pa-md">
          <q-card class="my-card bg-dark text-white">
            <q-card-section class="text-h6 text-bold q-pb-none">
              <q-icon name="wb_sunny" size="2rem" class="q-mr-sm" />
              Cuaca Hari Ini
            </q-card-section>
            <q-card-section>
              <q-input v-model="location" placeholder="Masukkan Lokasi" class="q-mb-md bg-light text-dark" outlined />
              <q-btn color="primary" label="Cari" @click="searchWeather" class="full-width q-mb-md" />
              <q-btn flat round icon="my_location" @click="useCurrentLocation" class="full-width" />
            </q-card-section>
            <q-card-section v-if="loading" class="flex flex-center q-pa-md">
              <q-spinner color="primary" />
              <div class="q-ml-sm">Loading data...</div>
            </q-card-section>
            <q-card-section v-else-if="weather" class="text-left q-pa-md">
              <div><q-icon name="location_on" /> <span class="text-bold">{{ weather.location }}</span></div>
              <div><q-icon name="thermostat" /> <span class="text-bold">{{ weather.temperature }}°C</span></div>
              <div><q-icon :name="weatherIcon" /> <span class="text-bold">{{ weather.condition }}</span></div>
            </q-card-section>
            <q-card-section v-else class="text-center q-pa-md">
              <q-icon name="cloud_off" size="4rem" class="q-my-md" />
              <div>Masukkan lokasi untuk melihat cuaca</div>
            </q-card-section>
          </q-card>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

// Script bagian dari Weather.vue
<script>
import axios from 'axios';

export default {
  data() {
    return {
      location: '',
      weather: null,
      loading: false,
    };
  },
  methods: {
    async searchWeather() {
      if (!this.location) {
        alert('Masukkan lokasi!');
        return;
      }
      this.loading = true;
      const apiKey = 'fc56ffca83a35793f8c7d2c4b5f9c7c4'; // Ganti dengan API Key yang Anda miliki
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: this.location,
            appid: apiKey,
            units: 'metric'
          }
        });
        const data = response.data;
        this.weather = {
          location: data.name,
          temperature: data.main.temp,
          condition: data.weather[0].main,
        };
      } catch (error) {
        console.error(error);
        alert('Terjadi kesalahan saat mengambil data cuaca.');
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(135deg, #2c3e50 25%, #3498db 100%);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
}

.my-card {
  max-width: 400px;
  width: 100%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background-color: #333;
  transition: transform 0.3s ease-in-out;
}

.my-card:hover {
  transform: translateY(-10px);
}

.q-toolbar-title {
  font-size: 24px;
  font-weight: bold;
}

.q-btn {
  transition: background-color 0.3s ease;
}

.q-btn:hover {
  background-color: #1565c0 !important;
}

.q-card-section {
  text-align: center;
}

.full-width {
  width: 100%;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.text-bold {
  font-weight: bold;
}

.bg-dark {
  background-color: #424242;
}

.text-dark {
  color: #121212;
}

.bg-light {
  background-color: #ffffff;
}

.q-input.bg-light .q-field__native {
  color: #121212;
}

.q-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
