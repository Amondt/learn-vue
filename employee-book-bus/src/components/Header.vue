<template>
    <div id="app-header">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        msg: String
    }
}
</script>

<style scoped>
    #app-header {
        margin: 20px auto;
    }

</style>
