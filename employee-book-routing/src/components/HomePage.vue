<template>
    <div id="home-page">
        <Header msg="Employee Directory" />
        <SearchBar />
        <EmployeeList class="scrollable-y" :employees="employees"/>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import SearchBar from './SearchBar.vue'
    import EmployeeList from './EmployeeList.vue'

    export default {
        name: "home-page",
        components: {
            Header,
            SearchBar,
            EmployeeList
        },
        props: {
           employees: Array
        }
    }
</script>

<style scoped>
    .scrollable-y {
        overflow-y: scroll;
    }
    #home-page {
        width: 50%;
        margin: 10px;
        background: rgb(255, 102, 0);
        color: #000;
    }

</style>
