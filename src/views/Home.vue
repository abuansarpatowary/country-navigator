<template>
  <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
    <div v-for="country in countries" :key="country.name.common">

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-7">
        <a href="#">
          <img class="rounded-t-lg w-full h-[230px] aspect-auto" :src="country.flags.png" :alt="country.name.common" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-4">{{ country.name.official
            }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.</p>
          <router-link :to="`/country/${country.ccn3}`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg
            hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
            dark:focus:ring-blue-800">
            View Country
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </router-link>
        </div>
      </div>

    </div>
    <!-- <div>
      <button @click="loadMore" class="py-2 px-7 bg-green-400 text-white mt-5">Load More</button>
    </div> -->
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const countries = ref([]);

    const fetchCountries = async () => {
      const url = "https://restcountries.com/v3.1/all";

      try {
        const response = await fetch(url);
        const data = await response.json();
        countries.value = data;
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    onMounted(fetchCountries);

    return {
      countries,
    };
  },
};
</script>
