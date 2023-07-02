<script setup>
import { Carousel } from 'flowbite-vue'
const props = defineProps({
    controls: {
        type: Boolean,
        default: true,
    },
})

</script>
<template>
    <Carousel></Carousel>
</template>
