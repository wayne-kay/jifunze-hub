<script setup>
import { ref } from 'vue';
import { useBooksStore } from '../stores/books';
import { useCartStore } from '../stores/cart';
import { useWishlistStore } from '../stores/wishlist';
import { useRouter } from 'vue-router';


// Cart
const booksStore = useBooksStore();
const router = useRouter();
const book = booksStore.selectedBook;


const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const quantity = ref(1);



function buyBook(book) {
    book.quantity = quantity.value; // Set the quantity for the book
  cartStore.updateCart(book);
  
}

function addToWishlist(book) {
  wishlistStore.addToWishlist(book)
}

function goBack() {
  router.back();
}

function goToCart() {
  router.push('/cart');
}




</script>

<template>
  <v-container class="page-section" max-width="1200">
    <v-row class="mb-6" align="center">
      <v-col cols="12" md="2">
        <v-btn icon="mdi-arrow-left" color="primary" variant="tonal" @click="goBack" />
      </v-col>
      <v-col cols="12" md="8" class="text-center">
        <div class="section-title">Book details</div>
      </v-col>
    </v-row>

    <v-card rounded="xl" elevation="12" class="overflow-hidden">
      <v-row no-gutters>
        <v-col cols="12" md="5">
          <v-img class="h-100" :src="book.image" min-height="520" cover />
        </v-col>
        <v-col cols="12" md="7">
          <v-card class="pa-4 pa-md-8 h-100" color="white" flat>
            <v-chip class="mb-4" color="primary" variant="tonal">{{ book.genre }}</v-chip>
            <v-card-title class="text-h4 px-0">{{ book.name }}</v-card-title>
            <v-card-subtitle class="px-0 mb-3">By {{ book.author }}</v-card-subtitle>

            <div class="d-flex align-center ga-3 mb-4">
              <v-rating model-value="5" :size="22" readonly />
              <v-chip color="green" variant="tonal">In stock</v-chip>
            </div>

            <v-card-text class="px-0 text-body-1">
              {{ book.long_description }}
            </v-card-text>

            <v-divider class="my-6" />

            <v-row align="center">
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 mb-2">Quantity</div>
                <v-number-input v-model="quantity" control-variant="split" density="comfortable" :min="1" :max="10" />
              </v-col>
              <v-col cols="12" sm="6" class="text-sm-end">
                <div class="text-overline">Price</div>
                <div class="text-h5 font-weight-bold">{{ book.price }}</div>
              </v-col>
            </v-row>

            <v-card-actions class="px-0 pt-6 flex-wrap ga-2">
              <v-btn variant="outlined" color="primary" @click="addToWishlist(book)">Add to Wishlist</v-btn>
              <v-btn color="primary" variant="elevated" @click="buyBook(book)">Add to Cart</v-btn>
              <v-spacer />
              <v-btn variant="text" color="primary" @click="goToCart">Go to cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  </template>
