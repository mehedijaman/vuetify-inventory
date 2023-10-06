  <script setup>
    import DefaultBar from './AppBar.vue';
    import DefaultView from './View.vue';
    import DefaultSideBar from './SideBar.vue';
  </script>
<template>
  <v-layout class="rounded rounded-md">
    <default-bar />
    <default-side-bar></default-side-bar>
    <default-view />
  </v-layout>
</template>

