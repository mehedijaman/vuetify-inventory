<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <router-view />
      </v-responsive>
    </v-container>
  </v-main>
</template>
