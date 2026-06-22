<script setup>
import { ref } from 'vue';
import { useBooksStore } from '../stores/books';
import { useCartStore } from '../stores/cart';
import { useWishlistStore } from '../stores/wishlist';
import { useRouter } from 'vue-router';

const router = useRouter();
const booksStore = useBooksStore();
const book= booksStore.books


function view(book) {
   booksStore.updateSelectedBook(book) // keep track of the selected item
    router.push('/view_book')
}


// cart
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const quantity = ref(1);

function buyBook(book) {
    book.quantity = quantity.value; // Set the quantity for the book
   cartStore.addToCart(book);
}

function addToWishlist(book) {
  wishlistStore.addToWishlist(book)
}


 

</script>

<template>
    <v-container class="page-section" max-width="1200">
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <div class="section-title">Browse books</div>
          <p class="section-subtitle mt-4">Find your next read and save the ones you love.</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="book in booksStore.books" :key="book.name" cols="12" sm="6" lg="3" class="mb-4">
          <v-card rounded="xl" elevation="10" class="h-100 d-flex flex-column overflow-hidden">
              <v-img
                :src="book.image"
                height="240"
                contain
                class="book-cover-image"
              />
              <v-card-title class="text-wrap">{{ book.name }}</v-card-title>
              <v-card-subtitle>By {{ book.author }}</v-card-subtitle>
              <v-card-text>
                <v-chip size="small" color="primary" variant="tonal" class="mb-3">{{ book.price }}</v-chip>
                <div class="text-body-2">{{ book.description }}</div>
              </v-card-text>

              <v-card-actions class="pa-4 pt-0 mt-auto flex-wrap ga-2">
                <v-btn color="primary" variant="elevated" @click="buyBook(book)">Add to cart</v-btn>
                <v-btn variant="outlined" color="primary" @click="addToWishlist(book)">Wishlist</v-btn>
                <v-btn variant="text" color="primary" @click="view(book)">View</v-btn>
              </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<style scoped>
.book-cover-image {
  background: #f3f6ff;
}
</style>
