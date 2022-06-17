<template>
    <div>
        <h1>{{parentMsg}}</h1>
        <ChildComponent @send-message="sendMessage" />
    </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';

export default {
     components: {ChildComponent},
    data(){
        return {
            parentMsg:''
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
    callChildFunc(){
        //this.$refs.child.$refs.child_btn.click();
        //this.$refs.child.childFunc();
        this.$refs.child.msg='부모컴포넌트에서 변경한 메시지';
    },
    sendMessage(data){
        this.parentMsg=data;
        alert(data);
    }
    }
}
</script>
<style scoped>

</style>