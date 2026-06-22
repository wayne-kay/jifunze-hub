<script setup>
import { RouterView } from 'vue-router';
import NavBar from './component/NavBar.vue';
</script>

<template>
    <v-app class="app-shell">
    <NavBar/>
    <v-main>
    <RouterView />
    </v-main>
  </v-app>
</template>

<style>
.app-shell {
  background:
    radial-gradient(circle at top, rgba(47, 106, 208, 0.14), transparent 32%),
    linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);
}

.page-section {
  padding-block: 32px;
}

.section-title {
  font-size: clamp(1.8rem, 2vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #000000;
}

.section-subtitle {
  max-width: 720px;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.65);
}
</style>
