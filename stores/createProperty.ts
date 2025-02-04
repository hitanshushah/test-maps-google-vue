import { defineStore } from "pinia";
import { ref } from "vue";

type PropertyData = {
  latitude: string;
  longitude: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  numFloors: number | null;
  numSuites: number | null;
};

export const useCreatePropertyStore = defineStore('createProperty', () => {
  const drawerOpen = ref(false);
  
  const defaultPropertyData: PropertyData = {
    latitude: '',
    longitude: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: '',
    numFloors: null,
    numSuites: null,
  };

  const propertyData = ref<PropertyData>({ ...defaultPropertyData });

  function openDrawer() {
    drawerOpen.value = true;
  }

  function closeDrawer() {
    drawerOpen.value = false;
  }

  function updatePropertyData<K extends keyof PropertyData>(key: K, value: PropertyData[K]) {
    propertyData.value[key] = value;
  }

  function resetPropertyData() {
    propertyData.value = { ...defaultPropertyData };
  }

  function createProperty() {
    console.log('Saving property:', propertyData.value);
    closeDrawer();
  }

  return {
    drawerOpen,
    propertyData,
    openDrawer,
    closeDrawer,
    updatePropertyData,
    createProperty,
    resetPropertyData,
  };
});
