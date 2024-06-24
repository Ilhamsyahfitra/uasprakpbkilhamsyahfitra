<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round dense icon="cloud" aria-label="Weather" />
        <q-toolbar-title>
          My Weather App
        </q-toolbar-title>
        <q-btn flat round icon="menu" @click="toggleDrawer"></q-btn>
      </q-toolbar>
    </q-header>

    <!-- Drawer for navigation -->
    <q-drawer v-model="drawer" show-if-above class="bg-secondary">
      <q-list>
        <q-item to="/" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <q-item to="/task/1" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            Task 1
          </q-item-section>
        </q-item>
        <!-- Add other items as needed -->
      </q-list>
    </q-drawer>

    <!-- Page container where the router view will be displayed -->
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const drawer = ref(false)

    const toggleDrawer = () => {
      drawer.value = !drawer.value
    }

    return {
      drawer,
      toggleDrawer
    }
  }
}
</script>

<style>
/* Adding some global styles */
body {
  background-color: #f0f2f5;
  color: #333;
  font-family: 'Roboto', sans-serif;
}

.q-header {
  background-color: #1976d2 !important;
  color: white !important;
}

.q-drawer {
  background-color: #424242 !important;
  color: white;
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

.q-list .q-item {
  transition: background-color 0.3s ease;
}

.q-list .q-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.q-icon {
  color: white;
}
</style>
