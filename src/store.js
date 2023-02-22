import {
    reactive
} from 'vue'

import axios from 'axios';

export const store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    characters: '',
    error: null,
    loading: true,
    categorySelector: '',
    categoryParameter: 'category',
    methods: {
        callApi(url) {

            if (this.store.categorySelector !== '') {
                url += `?${categoryParameter}=${this.store.categorySelector}`

            }


            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.store.characters = response.data
                    this.store.loading = false


                })
                .catch(error => {
                    /* console.error(error.message); */
                    this.store.error = error.message
                })
        }

    },
    mounted() {
        this.callApi(this.store.API_URL)
        console.log(this.store);
    },
})