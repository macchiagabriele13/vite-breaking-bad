<script>
import ItemList from './ItemList.vue';
import SearchBox from './SearchBox.vue';
import { store } from '../store.js';


export default {
    name: 'SiteMain',
    components: {
        ItemList,
        SearchBox,
    },
    data() {
        return {
            store
        }
    },
    /*  methods: {
         chooseCategory() {
             console.log('click');
             console.log(this.store.categorySelector);
 
             const selectedCategory = this.store.categorySelector
             const filterUrl = `${this.store.API_URL}?category=${selectedCategory}`
 
             console.log(filterUrl);
 
              this.callApi(filterUrl) 
 
             axios.get(filterUrl)
                 .then(resp => {
                     console.log(resp);
                     this.store.characters = resp.data
                     this.store.loading = false
 
                 })
                 .catch(err => {
                     console.error(err);
                 })
 
 
         }
  
     }, */

}

</script>

<template>

    <main>
        <SearchBox @selectCategory="store.callApi(store.API_URL)" />
        <ItemList />
    </main>

</template>

<style lang="scss" scoped>

</style>
