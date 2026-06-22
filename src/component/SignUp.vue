<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  address: '',
  password: '',
  confirmPassword: ''
})
</script>

<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6" lg="5">
        <!-- Header Section -->
        <div class="mb-8">
          <h1 class="text-h4 font-weight-bold mb-3">Create Your Account</h1>
          <p class="text-subtitle1 text-grey-darken-1">Join us today and start exploring</p>
        </div>

        <!-- Sign Up Card -->
        <v-card class="rounded-lg" elevation="4" style="border-top: 4px solid #1976d2">
          <v-card-text class="pa-8">
            <v-form>
              <!-- Name Row -->
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.firstName"
                    label="First Name"
                    variant="outlined"
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.lastName"
                    label="Last Name"
                    variant="outlined"
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Email & Phone -->
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.email"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.phone"
                    label="Phone Number"
                    variant="outlined"
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Location & Address -->
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.location"
                    label="City/Location"
                    variant="outlined"
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.address"
                    label="Address"
                    variant="outlined"
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Password Fields -->
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.confirmPassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- CTA Buttons -->
              <v-row class="mt-4">
                <v-col cols="12">
                  <v-btn
                    size="large"
                    class="w-100 mb-3"
                    color="primary"
                    style="font-weight: 600; text-transform: none; font-size: 16px"
                  >
                    Create Account
                  </v-btn>
                </v-col>
              </v-row>

              <!-- Sign In Link -->
              <v-row>
                <v-col cols="12" class="text-center">
                  <span class="text-body2 text-grey-darken-1">
                    Already have an account?
                    <router-link
                      to="/login"
                      class="font-weight-bold text-primary"
                      style="text-decoration: none"
                    >
                      Sign In
                    </router-link>
                  </span>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>

        <!-- Footer Text -->
        <p class="text-caption text-center text-grey mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>