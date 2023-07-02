<script setup>
import CountryCard from '../components/CountryCard.vue';
</script>
<template>

    <div>
        <h2>Country {{ $route.params.id }}</h2>
        <CountryCard />
    </div>
</template>