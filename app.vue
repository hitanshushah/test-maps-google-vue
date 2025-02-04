<template>
    <div class="p-4">
      <div class="d-flex align-center">
      <v-autocomplete
        density="compact"
        variant="outlined"
        clearable
        placeholder="Search Location..."
        ref="address"
      ></v-autocomplete>
      <v-btn 
        class="ml-2" 
        icon
        @click="showMap = true"
      >
        <v-icon icon="mdi-map-search"></v-icon>
      </v-btn>
    </div>
    <MapSelector v-model="showMap" />
      <v-form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field variant="outlined" density="compact" v-model="propertyData.latitude" label="Latitude" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field variant="outlined" density="compact" v-model="propertyData.longitude" label="Longitude" required></v-text-field>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-text-field variant="outlined" density="compact" v-model="propertyData.address" label="Address" required></v-text-field>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field variant="outlined" density="compact" v-model="propertyData.city" label="City" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field variant="outlined" density="compact" v-model="propertyData.province" label="Province" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field variant="outlined" density="compact" v-model="propertyData.postalCode" label="Postal Code" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field variant="outlined" density="compact" v-model="propertyData.country" label="Country" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field variant="outlined" density="compact" v-model="propertyData.numFloors" label="Number of Floors" type="number" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field variant="outlined" density="compact" v-model="propertyData.numSuites" label="Number of Suites" type="number" required></v-text-field>
          </v-col>
        </v-row>

        <div class="justify-end mt-4 d-flex">
          <v-btn color="secondary" class="mr-2" @click="handleCancel">Cancel</v-btn>
          <v-btn color="primary" @click="createProperty">Save</v-btn>
        </div>
      </v-form>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCreatePropertyStore } from '@/stores/createProperty';

const propertyStore = useCreatePropertyStore();
const { propertyData } = storeToRefs(propertyStore);
const { createProperty } = propertyStore;

const showMap = ref(false);

const handleCancel = () => {
  propertyStore.resetPropertyData();
  closeDrawer();
};

onMounted(() => {
  const autoComplete = new google.maps.places.Autocomplete(
    document.querySelector('[ref="address"]'), 
    {
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(0, 0)
      )
    }
  );

  autoComplete.addListener("place_changed", () => {
    console.log(autoComplete.getPlace()) 
  });
});
</script>
