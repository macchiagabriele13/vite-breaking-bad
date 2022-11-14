<script>

export default {
    name: "SingleItem",
    props: {
        character: Object
    }
}
</script>

<template>




    <div class="col">
        <div class="character">
            <img :src="character.img" :alt="character.name">
            <div class="name">{{ character.name }}</div>
            <div class="category">{{ character.category }}</div>
            <div class="status">{{ character.status }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
