<template>
    <div>
        <input type="text" v-model="firstName" />
        <input type="text" v-model="lastName" />
        <h1>Hello, {{fullName}}</h1>
    </div>
</template>
<script>
export default {
    components: {},
    computed:{
        fullName(){
            return this.firstName+this.lastName;
        }
    },
    data(){
        return {
            firstName: '재석',
            lastName: '유'
        }
    },
    setup() {
        
    },
    create(){

    },
    mounted(){
    },
    unmounted() {
        
    },
    methods: {
        getFullName(){
            return this.firstName+this.lastName;
        }
    }
}
</script>
<style scoped>

</style>