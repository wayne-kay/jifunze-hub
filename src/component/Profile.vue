<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
  <v-container class="page-section" max-width="1000"></v-container>

  <h1 class="text-h4 font-weight-bold mb-2">Profile

    {{ user ? user.firstName + ' ' + user.lastName : '' }}
    {{ user ? user.email : '' }}
    {{ user ? user.phoneNumber : '' }}
    {{ user ? user.location : '' }}
    {{ user ? user.address : '' }}
  </h1>
</template>
