<template>
    <div id="app">
        <!-- <div class="nav">
            <router-link class="btn" to="/hello">hello</router-link><br>
            <router-link class="btn" to="/test/10">test</router-link>
        </div>

        <router-view></router-view> -->
        <HomePage :employees="employees"/>
        <EmployeePage :employees="employees"/>
    </div>
</template>

<script>
    import HomePage from './components/HomePage.vue'
    import EmployeePage from './components/EmployeePage.vue'

    export default {
        name: 'app',
        components: {
            HomePage,
            EmployeePage,
        },
        data() {
            return {
                employeeSelector: 0,
                employees: [
                    {
                        id: 1,
                        firstName: "James",
                        lastName: "King",
                        role: "President and CEO",
                        callOff: "781-000-0001",
                        callMob: "617-000-0001",
                        email: "jking@fakemail.com",
                        photo: "/assets/hom2.jpg"
                    },{
                        id: 2,
                        firstName: "Julie",
                        lastName: "Taylor",
                        role: "VP of Marketing",
                        callOff: "781-000-0002",
                        callMob: "617-000-0002",
                        email: "jtaylor@fakemail.com",
                        photo: "/assets/fem1.jpg"
                    },{
                        id: 3,
                        firstName: "Eugene",
                        lastName: "Lee",
                        role: "CFO",
                        callOff: "781-000-0003",
                        callMob: "617-000-0003",
                        email: "elee@fakemail.com",
                        photo: "/assets/hom4.jpg"
                    },{
                        id: 4,
                        firstName: "John",
                        lastName: "Williams",
                        role: "VP of Engineering",
                        callOff: "781-000-0004",
                        callMob: "617-000-0004",
                        email: "jwilliams@fakemail.com",
                        photo: "/assets/hom1.jpg"
                    },{
                        id: 5,
                        firstName: "Gabrielle",
                        lastName: "Endrenyi",
                        role: "QA Manager",
                        callOff: "781-000-0005",
                        callMob: "617-000-0005",
                        email: "gendrenyi@fakemail.com",
                        photo: "/assets/fem3.jpg"
                    },{
                        id: 6,
                        firstName: "Andria",
                        lastName: "Garretson",
                        role: "VP of Human Resources",
                        callOff: "781-000-0006",
                        callMob: "617-000-0006",
                        email: "agarretson@fakemail.com",
                        photo: "/assets/fem2.jpg"
                    },{
                        id: 7,
                        firstName: "Ray",
                        lastName: "Moore",
                        role: "VP of Sales",
                        callOff: "781-000-0007",
                        callMob: "617-000-0007",
                        email: "rmoore@fakemail.com",
                        photo: "/assets/hom3.jpg"
                    },{
                        id: 8,
                        firstName: "Samanta",
                        lastName: "Prewitt",
                        role: "VP of Finance",
                        callOff: "781-000-0008",
                        callMob: "617-000-0008",
                        email: "sprewitt@fakemail.com",
                        photo: "/assets/fem4.jpg"
                    }
                ]
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Lato');

    .btn {
        color: #fefefe;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #app {
        font-family: 'Lato', sans-serif;
        /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto;
        width: 1000px;
        height: 70vh;
        display: flex;
        background: #555;
    }
</style>
