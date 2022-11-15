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
@use '../assets/scss/partials/variables' as *;

.character {
    background-color: $primaryBg;
    padding: 1rem;
    text-align: center;
    height: 450px;

    .name {
        text-transform: uppercase;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        font-weight: bolder;
    }

    .category,
    .status {
        color: $text-thumb;
    }

    .status {
        font-size: smaller;
    }
}
</style>
