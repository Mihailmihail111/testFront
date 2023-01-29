<template>
  <v-app>
    <Navbar/>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>
