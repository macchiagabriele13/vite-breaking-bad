<script>

export default {
    name: "SearchBox"
}
</script>

<template>

    <div class="selector">

        <select class="form-select form-select-lg fs-6" placeholder="Category" name="" id="">
            <option selected>Select category</option>
            <option value="">One</option>
            <option value="">Two</option>
            <option value="">Three</option>
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
