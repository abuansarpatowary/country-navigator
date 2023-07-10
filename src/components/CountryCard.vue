<template>
    <div>
        <a href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                :src="countryData.flags.png" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal text-gray-900 dark:text-white">
                <h2 class="mb-5 text-3xl font-bold">Name: {{ countryData.name.common }}</h2>
                <h5 class="mb-2 text-xl font-bold tracking-tight">Official: {{
                    countryData.name.official }}
                    <span class="text-lg border-left-1">{{ countryData.capital[0] }}</span>
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                    acquisitions of 2021 so far, in reverse chronological order.</p>
                <p>{{ countryData.continents[0] }}</p>
            </div>
        </a>
    </div>
    <div>

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Country Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Continent
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Population
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Timezone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ countryData.name.official }}
                        </th>
                        <td class="px-6 py-4">
                            {{ countryData.continents[0] }}
                        </td>
                        <td class="px-6 py-4">
                            {{ countryData.population }}
                        </td>
                        <td class="px-6 py-4">
                            {{ countryData.timezones[0] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
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
