<script>
import { store } from '../store.js';
export default {
    name: "SearchBox",
    data() {
        return {
            store
        }
    },
}
</script>

<template>

    <div class="selector">

        <select class="form-select form-select-lg fs-6" @change="$emit('selectCategory')"
            v-model="store.categorySelector" placeholder="Select Category">
            <option value="Breaking+Bad">Breaking Bad</option>
            <option value="Better+Call+Saul">Better Call Saul</option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
.selector {
    width: fit-content;
    padding-top: 1rem;



    option {
        font-size: 1rem;
    }
}
</style>
