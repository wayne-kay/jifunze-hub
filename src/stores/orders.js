import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {

            0:{
                id: 1,
                customerId: 1,
                bookId: 1,
                quantity: 7,
                total: 14000,
                status: "pending",
                date: "2023-08-01",
            },

            1:{
                id: 2,
                customerId: 2,
                bookId: 2,
                quantity: 4,
                total: 10000,
                status: "pending",
                date: "2023-08-02",
            },  

            2:{
                id: 3,
                customerId: 3,
                bookId: 3,
                quantity: 4,
                total: 10000,
                status: "pending",
                date: "2023-08-03",
            },

            3:{
                id: 4,
                customerId: 4,
                bookId: 4,
                quantity: 4,
                total: 10000,
                status: "pending",
                date: "2023-08-04",
            }


        }

        return{
            orders
        }
   },
   actions:{
      addToOrder(payload) {
          this.updateOrder(payload)
      },
      updateOrder(payload) {
           const newId = Object.keys(this.orders).length;
           this.orders[newId] = payload;
           console.log(this.orders)
            
       },
   },
   persist: true,
})