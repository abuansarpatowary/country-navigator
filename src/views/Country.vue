<template>
    <div>
        <h2 class="text-white">Country {{ $route.params.id }}</h2>
        <CountryCard :countryData="countryData" v-if="countryData" />

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CountryCard from '../components/CountryCard.vue';
import { useRoute } from 'vue-router';

const countryData = ref(null);
const route = useRoute();

onMounted(async () => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${route.params.id}`);
        const data = await response.json();
        countryData.value = data[0]; // Assuming the API response is an array with a single country object
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});
</script>
