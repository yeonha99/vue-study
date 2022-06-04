<template>
    <div class="container" v-bind:class="[activeClass,redClass]"> Class Binding</div>
    <div v-bind:style="styleObject">인라인 스타일 Binding</div>
</template>
<script>
export default {
    components: {},
    data(){
        return {
            styleObject:{
                backgroundColor: 'yellow',
                color: 'red',
                fontweight: 'bold'
            },
            activeClass: 'active',
            redClass: 'text-red'
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
        
    }
}
</script>
<style scoped>
.container{
    width: 100%;
    height: 200px;
}

.active{
    background-color: yellow;
    font-weight: bold;
}

.text-red{
    color:red;
}
</style>