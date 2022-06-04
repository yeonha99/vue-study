<template>
    <div>
        <!--
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else-if="type=='C'">C</h1>
        <h1 v-else>Other</h1>
        v-if는 조건이 성립되면 html 블럭을 생성하지만
        v-show는 html이 이미 랜더링 되어 있지만 안보이게 처리한 거임
        -->

    </div>
</template>
<script>
export default {
    components: {},
    data(){
        return {
            type: 'B'
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

</style>