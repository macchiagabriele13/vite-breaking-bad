<script>

import SiteMain from './components/SiteMain.vue'
import SiteHeader from './components/SiteHeader.vue'
import SearchBox from './components/SearchBox.vue'
import ItemList from './components/ItemList.vue'
import SingleItem from './components/SingleItem.vue'
import axios from 'axios'
import { store } from './store.js'

export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    SiteHeader,
    SiteMain,
    SearchBox,
    ItemList,
    SingleItem
  },
  methods: {
    callApi(url) {
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
    /* console.log(this.store); */
  },
}
</script>

<template>


  <SiteHeader />
  <div class="container">

    <SiteMain />

  </div>

</template>

<style lang="scss" scoped>

</style>
