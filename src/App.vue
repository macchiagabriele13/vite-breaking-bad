<script>

import SiteMain from './components/SiteMain.vue'
import SiteHeader from './components/SiteHeader.vue'
import SearchBox from './components/SearchBox.vue'
import ItemList from './components/ItemList.vue'
import SingleItem from './components/SingleItem.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      API_URL: 'https://www.breakingbadapi.com/api/characters',
      image: null,
      category: null,
      name: null,
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error.message);
        })
    }

  },
  mounted() {
    this.callApi(this.API_URL)
  },

  components: {
    SiteHeader,
    SiteMain,
    SearchBox,
    ItemList,
    SingleItem
  }
}
</script>

<template>


  <SiteHeader />
  <div class="container">
    <SearchBox />
    <SiteMain />

  </div>

</template>

<style lang="scss" scoped>

</style>
