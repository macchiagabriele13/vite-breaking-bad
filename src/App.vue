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
