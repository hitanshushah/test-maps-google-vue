<template>
    <v-dialog class="w-[40%]" :model-value="modelValue" @update:model-value="updateModelValue">
      <v-card >
        <v-card-title> Select a Location </v-card-title>
        <GoogleMap
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
        <v-card-actions>
          <v-btn class="ms-auto" text="Close" @click="closeDialog"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup lang="ts">
  defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const closeDialog = () => {
    emit('update:modelValue', false); 
  };
  
  const updateModelValue = (value: boolean) => {
    emit('update:modelValue', value); 
  };

  import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 40.689247, lng: -74.044502 }
  </script>
  