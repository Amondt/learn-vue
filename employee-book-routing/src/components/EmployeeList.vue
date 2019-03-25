<template>
    <div id="employee-list">
        <EmployeeListItem class="items" v-for="(employee, index) in employees" :key="index" :employee="employee" />
    </div>
</template>

<script>
    import EmployeeListItem from "./EmployeeListItem.vue"

    export default {
        name: 'employee-list',
        components: {
            EmployeeListItem,
        },
        props: {
            employees: Array
        }
    }
</script>

<style scoped>
    #employee-list {
        height: 81.8%;
    }
    .items {
        margin: 20px;
    }

</style>
