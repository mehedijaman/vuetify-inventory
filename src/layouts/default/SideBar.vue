<script setup>
import { ref } from 'vue';

const drawer = ref(true);
const rail = ref(false);
</script>
<template>
  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Mehedi Jaman"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item to="/dashboard" prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
        <v-list-item to="/pos" prepend-icon="mdi-desktop-classic" title="POS" value="pos"></v-list-item>
        <v-list-item to="/invoice" prepend-icon="mdi-receipt-text" title="Invoice" value="invoice"></v-list-item>
        <v-list-item to="/customer" prepend-icon="mdi-face-agent" title="Customer" value="customer"></v-list-item>
        <v-list-item to="/product" prepend-icon="mdi-shopping" title="Product" value="product"></v-list-item>
        <v-list-item to="/vendor" prepend-icon="mdi-truck" title="Vendor" value="vendor"></v-list-item>
        <v-list-item to="/user" prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        <v-list-item to="settings" prepend-icon="mdi-cog" title="Settings" value="settings"></v-list-item>
        <v-list-item to="/logout" prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
