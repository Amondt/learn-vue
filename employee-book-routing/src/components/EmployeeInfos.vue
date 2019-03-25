<template>
    <div id="employee-infos">
        <div v-if="this.$route.path === '/'" class='logo'>
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <div v-else>
            <img :src="employees[$route.params.personID-1].photo" alt="avatar">

            <p>{{ employees[$route.params.personID-1].firstName + ' ' + employees[$route.params.personID-1].lastName }} <br> {{ employees[$route.params.personID-1].role }}</p>

            <div class="separation"></div>

            <p>Call Office <br> {{ employees[$route.params.personID-1].callOff }}</p>

            <div class="separation"></div>

            <p>Call Mobile <br> {{ employees[$route.params.personID-1].callMob }}</p>

            <div class="separation"></div>

            <p>SMS <br> {{ employees[$route.params.personID-1].callMob }}</p>

            <div class="separation"></div>

            <p>Email <br> {{ employees[$route.params.personID-1].email }}</p>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'

    export default {
        name: "employee-infos",
        props: {
            employees: {
                type: Array,
                default: false,
            }
        },
        data() {
            return {
                index: 0,
                test: true
            }
        },
        methods: {
            itemClicked() {
                console.log(this.$router)
                if (employees[0] === 'undefined') {
                    return false
                } else {
                    return true
                }
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
    .logo {
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
