<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
export default {
     components: {},
     props: {

     },
    data(){
        return {
          msg: '자식에 있던 메시지'  
        };
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
        childFunc(){
            alert('부모 컴포넌트에서 직접 발생시킨 이벤트');
        }
    }
}
</script>
<style scoped>

</style>