<template>
    <div id="employee-infos">
        <img :src="employees[index].photo" alt="avatar">

        <p>{{ employees[index].firstName + ' ' + employees[index].lastName }} <br> {{ employees[index].role }}</p>

        <div class="separation"></div>

        <p>Call Office <br> {{ employees[index].callOff }}</p>

        <div class="separation"></div>

        <p>Call Mobile <br> {{ employees[index].callMob }}</p>

        <div class="separation"></div>

        <p>SMS <br> {{ employees[index].callMob }}</p>

        <div class="separation"></div>

        <p>Email <br> {{ employees[index].email }}</p>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'

    export default {
        name: "employee-infos",
        props: {
            employees: Array
        },
        data() {
            return {
                index: 0
            }
        },
        created() {
            eventBus.$on('updateEmployeeInfo', (index) => {
                this.index = index-1
                console.log(this.index)
            })
        }
    }
</script>

<style scoped>
    #employee-infos {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }
    img {
        width: 120px;
        display: block;
        margin: 10px auto;
    }
    p {
        margin: 10px;
        font-size: 1.2em;
    }
    .separation {
        width: 60%;
        height: 2px;
        background: #999;
        margin: 10px auto;
    }

</style>
