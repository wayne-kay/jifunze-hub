<script setup>
</script>

<template>
  <v-container fluid class="page-section">
    <v-sheet class="hero-sheet mx-auto rounded-xl overflow-hidden" color="primary" elevation="12">
      <v-row align="center" class="ma-0">
        <v-col cols="12" lg="6" class="pa-8 pa-md-12 text-white">
          <v-chip color="white" variant="tonal" class="mb-4">Online bookstore</v-chip>
          <h1 class="text-h2 font-weight-black mb-4">Discover your next favorite read.</h1>
          <p class="text-body-1 text-white text-medium-emphasis mb-6">
            Browse bestselling novels, save books to your wishlist, and shop with a clean, modern experience.
          </p>
          <div class="d-flex flex-wrap ga-3">
            <v-btn color="white" class="text-primary" size="large" to="/books">Browse books</v-btn>
            <v-btn variant="outlined" color="white" size="large" to="/wishlist">View wishlist</v-btn>
          </div>
        </v-col>
        <v-col cols="12" lg="6" class="pa-0">
          <v-carousel cycle hide-delimiters show-arrows="hover" height="420">
            <v-carousel-item src="/carousel-1.jpg" cover />
            <v-carousel-item src="/carousel-2.jpg" cover />
            <v-carousel-item src="/carousel-3.jpg" cover />
            <v-carousel-item src="/carousel-3 (2).jpg" cover />
          </v-carousel>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>

  <v-container class="page-section">
    <v-row class="text-center mb-8">
      <v-col cols="12">
        <div class="section-title black-heading">About Jifunze Hub</div>
        <p class="section-subtitle mt-4">
          A clean, convenient bookstore built to help readers discover books they love.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="8" class="pa-4 h-100">
          <v-icon icon="mdi-book-open-page-variant-outline" color="primary" size="40" />
          <v-card-title class="px-0">Curated catalog</v-card-title>
          <v-card-text class="px-0">Browse romance, fantasy, comedy, and more in one polished storefront.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="8" class="pa-4 h-100">
          <v-icon icon="mdi-heart-outline" color="primary" size="40" />
          <v-card-title class="px-0">Wishlist friendly</v-card-title>
          <v-card-text class="px-0">Save books for later and return to them whenever you’re ready.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="8" class="pa-4 h-100">
          <v-icon icon="mdi-truck-fast-outline" color="primary" size="40" />
          <v-card-title class="px-0">Simple shopping</v-card-title>
          <v-card-text class="px-0">Move smoothly from discovery to cart with a clear, elegant flow.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="page-section">
    <v-row class="mb-6">
      <v-col cols="12" class="text-center">
        <div class="section-title black-heading">Featured books</div>
        <p class="section-subtitle mt-4">A few reader favorites to get you started.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" lg="3">
        <v-card rounded="xl" elevation="10" class="h-100 d-flex flex-column overflow-hidden">
          <v-img src="/book-2.jpg" height="240" cover />
          <v-card-title>Off-Campus: The Goal</v-card-title>
          <v-card-subtitle>Elle Kennedy</v-card-subtitle>
          <v-card-text>2500</v-card-text>
          <v-card-actions class="pa-4 pt-0">
            <v-btn color="primary" variant="elevated" to="/books">Shop now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card rounded="xl" elevation="10" class="h-100 d-flex flex-column overflow-hidden">
          <v-img src="/book-1.jpg" height="240" cover />
          <v-card-title>Off-Campus: The Legacy</v-card-title>
          <v-card-subtitle>Elle Kennedy</v-card-subtitle>
          <v-card-text>2500</v-card-text>
          <v-card-actions class="pa-4 pt-0">
            <v-btn color="primary" variant="elevated" to="/books">Shop now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card rounded="xl" elevation="10" class="h-100 d-flex flex-column overflow-hidden">
          <v-img src="/book-3.jpg" height="240" cover />
          <v-card-title>The Love Song</v-card-title>
          <v-card-subtitle>Elle Kennedy</v-card-subtitle>
          <v-card-text>2500</v-card-text>
          <v-card-actions class="pa-4 pt-0">
            <v-btn color="primary" variant="elevated" to="/books">Shop now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card rounded="xl" elevation="10" class="h-100 d-flex flex-column overflow-hidden">
          <v-img src="/book-4.jpg" height="240" cover />
          <v-card-title>Off-Campus: The Score</v-card-title>
          <v-card-subtitle>Elle Kennedy</v-card-subtitle>
          <v-card-text>2500</v-card-text>
          <v-card-actions class="pa-4 pt-0">
            <v-btn color="primary" variant="elevated" to="/books">Shop now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-sheet color="primary" class="py-8 mt-8">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="4" class="text-center text-md-start">
          <router-link to="/" class="d-inline-flex align-center text-decoration-none text-white">
            <v-avatar size="48" color="white" class="mr-3">
              <v-img src="/jifunze-hub-logo.png" cover />
            </v-avatar>
            <strong>Jifunze Hub</strong>
          </router-link>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-white">
          <div class="mb-2">Follow us on : </div>
          <v-icon icon="mdi-instagram" class="mx-2"  v-text="jifunze_hub"/>
          <v-icon icon="mdi-twitter" class="mx-2"  v-text="jifunze_hub"/>
          <v-icon icon="mdi-facebook" class="mx-2"  v-text="jifunze_hub"/>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-white text-md-end">
          <div>info@jifunzehubonline.com</div>
          <div> tel: +254 717 342 789</div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.hero-sheet {
  min-height: 420px;
}

.black-heading {
  color: #000;
}
</style>
