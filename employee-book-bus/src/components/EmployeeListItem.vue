<template>
    <div id="employee-list-item" @click="clickEmployeeItem(employee.id)" v-show="isActive">
        <img :src="employee.photo" alt="avatar" />
        <p>{{ fullName }}</p>
        <p>{{ employee.role }}</p>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'

    export default {
        name: 'employee-list-item',
        props: {
            employee: Object
        },
        data() {
            return {
                isActive: true
            }
        },
        methods: {
            clickEmployeeItem(index) {
                eventBus.$emit('updateEmployeeInfo', index)
            },
            searchById(search) {
                if (this.employee.id == search) {
                    return true
                }
            },
            searchByName(search) {
                if (search === this.fullName.toLowerCase()) {
                    return true
                }
                let searchWords = search.split(' ')
                for (let i=0; i<searchWords.length; i++) {
                    if (searchWords[i] === this.employee.firstName.toLowerCase() || searchWords[i] === this.employee.lastName.toLowerCase()) {
                        return true
                    }
                }
            },
            searchByRole(search) {
                let searchWords = search.split(' ')
                for (let i=0; i<searchWords.length; i++) {
                    for (let y=0; y<this.roleWords.length; y++) {
                        if (searchWords[i] === this.roleWords[y].toLowerCase()) {
                            return true
                        }
                    }
                }

            }
        },
        created() {
            eventBus.$on('displayEmployeeItems', (search) => {
                if (this.searchById(search) || this.searchByName(search) || this.searchByRole(search) || search == '') {
                    this.isActive = true
                } else {
                    this.isActive = false
                }
            })
        },
        computed: {
            fullName: function() {
                return this.employee.firstName + ' ' + this.employee.lastName
            },
            roleWords: function() {
                return this.employee.role.split(' ')
            }
        }
    }
</script>

<style scoped>
    #employee-list-item {
        border: 1px solid #555;
        background: rgb(255, 216, 143);
    }
    img {
        float: left;
        width: 75px;
        margin: 5px;
    }
    p {
        margin: 16px;
    }
</style>

