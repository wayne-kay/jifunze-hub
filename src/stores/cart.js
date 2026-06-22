import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',  {
   state: () => {
        const cart= []

        return{
            cart
        }
   },
   actions:{
      addToCart(payload) {
          this.updateCart(payload)
      },
      updateCart(payload) {
           this.cart.push(payload)
           console.log(this.cart)
            
       },
   },
   persist: true,
})