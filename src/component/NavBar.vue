<script setup>
import { useDisplay } from 'vuetify'
import {useAuth}  from '../Services/auth.js'
import { useRouter } from "vue-router";

const router = useRouter();
const { logout } = useAuth()
const isAuthenticated = localStorage.getItem('isAuthenticated')
const user = JSON.parse(localStorage.getItem('user'))
const { mobile } = useDisplay()


let letter = ''
if(user){
    letter = user.firstName ? user.firstName[0] : ''
}

function logOut(){
    logout()
    router.push('/').then(() => {
        router.go(0)
    });
}

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
        <v-btn variant="text" to="/admin">Admin</v-btn>
     
<v-btn icon="mdi-account" v-if="isAuthenticated" variant="tonal">{{letter}}
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>                        
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="()=> { logOut()}">Logout</v-btn>                        
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>

        <v-btn variant="text" to="/login" v-else>Log in</v-btn>
      </template>
    </v-app-bar>
  </template>