<script setup>
import { ref } from 'vue'

const showPassword = ref(false)
const password = ref(null) 

const confirmPassword= ref(null)
const showConfirm = ref(false)
const rules = {
    required: value => !!value || 'Required.', // if statement is true, return true, else return 'Required.'
    min: v => v.length >= 8 || 'Min 8 characters', // if statement is true, return true, else return 'Min 8 characters'
    passwordMatch: () => password == confirmPassword || 'Passwords must match'  // if statement is true, return true, else return 'Passwords must match' and also a function that checks if the password and confirm password match
  }
// Data Model for the form, we will use v-model to bind the data to the form fields. We will also use rules to validate the form fields. We will use showPassword and showConfirm to toggle the visibility of the password fields.

const firstName = ref(null)
const lastName = ref(null)
const email = ref(null)
const phoneNumber = ref(null)
const location = ref(null)
const address = ref(null)


function registerUser() 
    // Here we will send the data to the backend to register the user. We will use axios to send the data to the backend. We will also handle the response from the backend and show a success message or an error message based on the response.
{
    const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        location: location.value,
        address: address.value,
        password: password.value
    }

    try{
        localStorage.setItem("userData", JSON.stringify(userData)) 
    } catch (error) {
        console.error("Error saving user data:", error)
    }



}



</script>

<template>
    <v-container align="center" class="mt-16">
        <v-row>
            <v-col>
                <v-card max-width="80%" class="mt-16">
                    <v-form class="mt-12">
                          <v-row>
                            <v-col md ="3">
                                <div> First Name </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="firstName"></v-text-field>
                            </v-col>
                            <v-col md ="3">
                                <div> Last Name </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="lastName"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md ="3">
                                <div> Email </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="email"></v-text-field>
                            </v-col>
                            <v-col md ="3">
                                <div> Phone Number </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field v-model="phoneNumber" type="number"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md ="3">
                                <div> Location </div>
                            </v-col>
                            <v-col md ="3">
                                <v-select v-model="location" :items="['Mombasa', 'Nairobi', 'Kisumu', 'Eldoret', 'Thika', 'Naivasha', 'Machakos']"></v-select>
                            </v-col>
                            <v-col md ="3">
                                <div> Address </div>
                            </v-col>
                            <v-col md ="3">
                                <v-text-field></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md ="3">
                                <div> Password </div>
                            </v-col>
                            <v-col md ="3">
                               	<v-text-field 
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                            </v-col>
                            <v-col md ="3">
                                <div> Confirm Password </div>
                            </v-col>
                            <v-col md ="3">
                               	<v-text-field 
                                v-model="confirmPassword"
                                :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.passwordMatch]"
                                :type="showConfirm ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showConfirm = !showConfirm"
                            ></v-text-field>
                            </v-col>
                        </v-row>


                    <v-row>
                            <v-col md ="6">
                                <v-btn color="primary" variant="elevated" @click="registerUser()">Sign Up</v-btn>
                            </v-col>
                            <v-col md ="6">
                                <div>
                                    Already have an acount?
                                </div>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  
  </template>