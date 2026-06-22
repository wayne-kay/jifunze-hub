<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
</script>

<template>
<v-container class="page-section" max-width="1200">
        <v-row class="mb-6">
            <v-col cols="12" class="text-center">
                <div class="section-title">Your cart</div>
                <p class="section-subtitle mt-4">Review your selected books and continue to checkout.</p>
            </v-col>
        </v-row>

        <v-row v-if="cartStore.cart.length">
            <v-col cols="12" v-for="item in cartStore.cart" :key="item.name">
                <v-card rounded="xl" elevation="10" class="overflow-hidden">
                    <v-row no-gutters align="center">
                        <v-col cols="12" md="3">
                            <v-img :src="item.image" height="220" cover />
                        </v-col>
                        <v-col cols="12" md="9">
                            <v-card class="pa-4 pa-md-6 h-100" flat>
                                <v-card-title class="px-0">{{ item.name }}</v-card-title>
                                <v-card-subtitle class="px-0">Ksh {{ item.price }}</v-card-subtitle>
                                <v-card-text class="px-0">Quantity: {{ item.quantity }}</v-card-text>
                                <div class="text-h6 font-weight-bold px-0 mb-4">Total: {{ item.price * item.quantity }}</div>
                                <v-card-actions class="px-0">
                                    <v-spacer />
                                    <v-btn color="primary" variant="elevated">Checkout</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-row v-else>
            <v-col cols="12" class="text-center py-12">
                <v-icon icon="mdi-cart-outline" size="72" color="primary" />
                <div class="text-h5 mt-4 mb-2">Your cart is empty</div>
                <v-btn color="primary" variant="elevated" to="/books">Browse books</v-btn>
            </v-col>
        </v-row>
    </v-container>

  </template>
