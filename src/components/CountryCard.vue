<template>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ countryData.name.common }}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
</template>
<script>
export default {
    props: {
        countryData: {
            type: Object,
        },
    },

};
</script>
