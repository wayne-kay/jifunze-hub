<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
    <v-app-bar color="primary" elevation="10" density="comfortable">
      <v-app-bar-title class="font-weight-bold d-flex align-center ga-3">
        <router-link to="/" class="d-flex align-center text-decoration-none text-white">
          <v-avatar size="40" color="white" class="mr-3">
            <v-img src="/jifunze-hub-logo.png" cover />
          </v-avatar>
          <span>Jifunze Hub</span>
        </router-link>
      </v-app-bar-title>

      <template v-if="!mobile">
        <v-btn variant="text" to="/">Home</v-btn>
        <v-btn variant="text" to="/books">Books</v-btn>
        <v-btn variant="text" to="/wishlist">Wishlist</v-btn>
        <v-btn variant="text" to="/cart">Cart</v-btn>
        <v-btn variant="text" to="/library">Library</v-btn>
        <v-btn variant="text" to="/profile">Profile</v-btn>
        <v-btn variant="tonal" to="/admin" class="ml-2">Admin</v-btn>
      </template>
    </v-app-bar>
  </template>