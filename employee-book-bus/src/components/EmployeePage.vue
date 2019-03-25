<template>
    <div id="employee-page">
        <Header msg="Employee" />
        <EmployeeInfos :employees="employees"/>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import EmployeeInfos from './EmployeeInfos.vue'

    export default {
        name: "employee-page",
        components: {
            Header,
            EmployeeInfos,
        },
        props: {
            employees: Array
        }
    }
</script>

<style scoped>
    #employee-page {
        width: 50%;
        margin: 10px;
        background: rgb(255, 102, 0);
        color: #000;
    }
</style>
