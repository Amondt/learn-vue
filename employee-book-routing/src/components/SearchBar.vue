<template>
    <form id="search-bar" @submit.prevent="onSubmit">
        <input name="search" v-model="search" class="search-input" type="text" placeholder="enter your search">
    </form>
</template>

<script>
    import {eventBus} from '../main.js'

    export default {
        name: 'search-bar',
        data() {
            return {
                search: ""
            }
        },
        methods: {
            onSubmit(e) {
                eventBus.$emit('displayEmployeeItems', this.search.toLowerCase())
                console.log(this.search)
                this.search = ''
            }
        }
    }
</script>

<style scoped>
    /* #search-bar {
        width: 100%;
    } */
    .search-input {
        width: 90%;
        margin: 10px auto;
        padding: 5px;
    }
</style>
